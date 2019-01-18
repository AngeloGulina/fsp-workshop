const sizes = require('./sizes.js');
const sharp = require('sharp');
const fs = require('fs');
const async = require('async');
const AWS = require('aws-sdk');
const S3 = new AWS.S3({ signatureVersion: 'v4' });
const path = require('path');

const { OUTPUT_BACKET } = process.env;

module.exports.image = (event, context, callback) => {
    let s3Object = event.Records[0].s3;
    let bucketName = s3Object.bucket.name;
    let fileName = s3Object.object.key;

    resize(bucketName, fileName, function (err, data) {
        if (err) {
            return callback(err);
        }
        callback(null, 'Success!');
    });
};

/**
 * This function is used to resize the images.
 * @param bucketName
 * @param fileName
 * @param cb
 */
function resize(bucketName, fileName, cb) {

    getS3Buffer(bucketName, fileName, function (err, data) {
        if (err) {
            return cb(err);
        }
        let buffer = data.Body;

        putS3Buffer(OUTPUT_BACKET, fileName, buffer, cb);

        async.every(sizes, function (size, callback) {
            sharp(buffer)
                .withMetadata()
                .resize(size.width, size.height)
                .jpeg({
                    quality: 90,
                    progressive: true,
                    force: false
                })
                .toBuffer()
                .then(function (data) {
                    let outputFileName = createOutputFilename(fileName, size.name);
                    putS3Buffer(OUTPUT_BACKET, outputFileName, data, callback);
                })
                .catch(callback);
        }, cb);
    });
}

/**
 * Get object from s3
 * @param bucket
 * @param fileName
 * @param cb
 */
function getS3Buffer(bucket, fileName, cb) {
    S3.getObject({ Bucket: bucket, Key: fileName }, cb);
}

/**
 * put object to S3
 * @param bucket
 * @param fileName
 * @param buffer
 * @param cb
 */
function putS3Buffer(bucket, fileName, buffer, cb) {
    S3.putObject({ Body: buffer, Bucket: bucket, Key: fileName }, cb);
}

/**
 * Create proper file name for the resized image
 * @param filename
 * @param size
 * @returns {string}
 */
function createOutputFilename(filename, size) {

    // Get extension
    let extension = path.extname(filename);

    // Remove extension from file
    let fileNameNoExtension = filename.substring(0, filename.indexOf(extension));

    // Add size name and return it
    return fileNameNoExtension + '-' + size + extension;
}
