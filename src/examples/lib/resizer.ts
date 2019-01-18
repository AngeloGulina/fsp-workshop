import { BatchResizer, ResizerOptions } from "../types";
import { createOutputFileName } from "./file";

export function getResizer({ fileName, resizer, sizes }: ResizerOptions): BatchResizer {
    return buffer => {
        const sizesPromises = sizes.map(size => {
            const outputFileName = createOutputFileName({ fileName, size });
            return resizer(buffer, size)
                .then((buffer) => ( {
                    resizedFileName: outputFileName,
                    buffer,
                } ));
        });
        return Promise.all(sizesPromises);
    };
}
