import {readFile} from 'fs/promises';
import { PaintingData } from './types';

/**
 * Only components with getStaticProps are allowed to
 * import modules that require node:fs.
 */
export function getJsonData() {
  let jsonData: PaintingData[];

  return readFile('./public/data.json', 'utf8')
    .then((stringifiedJson) => {
      jsonData = JSON.parse(stringifiedJson);
      return jsonData;
    }); 
}