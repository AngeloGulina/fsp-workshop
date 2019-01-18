export interface OutputFileOptions {
    fileName: string
    size: Size
}

export interface BatchResizer {
    (buffer: string): Promise<ResizerOutput[]>
}

export interface Resizer {
    (buffer: string, size: Size): Promise<string>
}

export interface ResizerOutput {
    resizedFileName: string
    buffer: string
}

export interface ResizerOptions {
    fileName: string
    resizer: Resizer
    sizes: Size[]
}

export interface Size {
    height: number
    name: string
    ratio: number
    width: number
}

export interface S3GetOptions {
    fileName: string
}

export interface S3PutOptions extends S3GetOptions {
    buffer: string
    cacheControl: string
}

export interface S3ResponseOptions {
    Body: string
}

export interface S3UploadOptions extends S3ResponseOptions {
    CacheControl?: string
    Bucket: string
    Key: string
}

export interface S3Service {
    batchPutBuffer: (x: S3PutOptions[]) => Promise<any[]>
    getDestination: () => string
    getBuffer: (x: S3GetOptions) => Promise<any>
    putBuffer: (x: S3PutOptions) => Promise<any>
}
