import { getBuffer, getS3Service, getS3UploadOptions } from "./lib/aws/s3";
import { Size } from "./types";
import { getResizer } from "./lib/resizer";
import { applySize } from "./lib/sharp/resize";

const sizes: Size[] = [];
const outputBucketName: string = 'fakeBucketName';

export const image = (event: any, context: any, callback: Function) => {
    const s3Object = event.Records[0].s3;
    const originalBucketName = s3Object.bucket.name;
    const fileName = s3Object.object.key;

    const s3SourceService = getS3Service(originalBucketName);
    const s3OutputService = getS3Service(outputBucketName);
    const resizeFiles = getResizer({ fileName, resizer: applySize, sizes });

    s3SourceService.getBuffer({ fileName })
        .catch(err => {
            throw new Error(err);
        })
        .then(getBuffer)
        .then(resizeFiles)
        .then(files => files.map(getS3UploadOptions))
        .then(s3OutputService.batchPutBuffer)
        .then(() => {
            // some success message
        })
        .catch(err => {
            if (err) {
                return callback(err);
            }
            callback(null, 'Resize done!');
        });
};
