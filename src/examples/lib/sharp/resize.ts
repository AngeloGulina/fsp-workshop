import { Resizer } from "../../types";

// @ts-ignore
const sharp = require('sharp');

export const applySize: Resizer = (buffer, size) => sharp(buffer)
    .resize(size.width, size.height)
    .toBuffer();
