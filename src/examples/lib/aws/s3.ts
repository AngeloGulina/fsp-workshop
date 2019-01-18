// @ts-ignore
import AWS from 'aws-sdk';
import { ResizerOutput, S3GetOptions, S3PutOptions, S3ResponseOptions, S3Service, S3UploadOptions } from "../../types";

const S3 = new AWS.S3({ signatureVersion: 'v4' });
export const getS3Service = (bucketName: string): S3Service => ( {

    getDestination(): string {
        return bucketName;
    },

    getBuffer({ fileName }: S3GetOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            S3.getObject({ Bucket: bucketName, Key: fileName }, (err: Error, data: any) => {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        });
    },

    putBuffer({ buffer, cacheControl = null, fileName }: S3PutOptions): Promise<any> {
        const params: S3UploadOptions = {
            Body: buffer,
            Bucket: bucketName,
            Key: fileName
        };

        if (cacheControl) {
            params['CacheControl'] = cacheControl;
        }

        return new Promise((resolve, reject) => {
            S3.upload(params, (err: Error, data: any) => {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        });
    },

    batchPutBuffer(files: S3PutOptions[]): Promise<any[]> {
        // @ts-ignore
        return files.map(this.putBuffer);
    }
} );

export const getBuffer = (x: S3ResponseOptions): string => x.Body;
export const getS3UploadOptions = ({ resizedFileName, buffer }: ResizerOutput): S3PutOptions => ( {
    fileName: resizedFileName,
    buffer,
    cacheControl: 'max-age=31536000, public',
} );
