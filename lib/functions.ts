import data from '../public/data.json';
import { paintingData } from './types';

export function makeListOfPaintingColumns() {
  // Column number for each painting in public/data.json
  const dataColumns = [
    0, 1, 2, 3,
    0, 1, 2, 3,
    0, 1, 3,
    0, 1, 3, 4
  ];

  const listOfPaintingCols: paintingData[][] = [[], [], [], []];

  for (let i = 0; i < dataColumns.length; i++) {
    // listOfPaintingCols[dataColumns[i]].push(data[i])
  }

  return listOfPaintingCols;
};