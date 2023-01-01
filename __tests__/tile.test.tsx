import {expect, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import { before } from 'node:test';
import Tile from '../components/Tile';
import { samplePainting } from '../lib/contants';
import { kebabCase } from '../lib/functions';

beforeEach(() => {
  render(<Tile painting={samplePainting}/>)
});

test('Painting is rendered', () => {
  const img = screen.getByAltText(samplePainting.name);
  expect(img).toBeDefined();
});

test('Painting name is rendered', () => {
  const name = screen.getByText(samplePainting.name);
  expect(name).toBeDefined();

});

test('Artist name is rendered', () => {
  const artist = screen.getByText(samplePainting.artist.name);
  expect(artist).toBeDefined();
});

test('Tile links to path with name of painting', () => {
  const img = screen.getByAltText(samplePainting.name);
  expect(img.closest('a')).toHaveProperty(
    'href',
    `http://localhost/${kebabCase(samplePainting.name)}`
  );
});