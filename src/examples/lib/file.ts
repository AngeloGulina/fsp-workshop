import { OutputFileOptions } from "../types";
// @ts-ignore
const path = require('path');


export const createOutputFileName = ({ fileName, size: { name } }: OutputFileOptions): string => {
    if (!fileName || !name) {
        return;
    }
    const extension = path.extname(fileName);
    if (!extension) {
        return;
    }
    const fileNameNoExtension = fileName.replace(extension, '');
    return `${ fileNameNoExtension }-${ name }${ extension }`;
};
