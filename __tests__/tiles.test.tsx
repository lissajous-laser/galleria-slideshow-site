import {expect, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import Tiles from '../components/Tiles';
import { kebabCase } from '../lib/functions';

beforeEach(() => {
  render(<Tiles/>);
});

test('there are pictures are in dom', () => {
  let pics = screen.queryAllByRole('img');
  expect(pics.length).toBeGreaterThan(0);
});

test('Starry Night pic exists', () => {
  let img = screen.getAllByAltText('Starry Night');
  expect(img[0]).toBeDefined();
});

test('Starry Night pic has link to its page', () => {
  const name = 'Starry Night'

  let starryNight = screen.getAllByAltText(name);
  expect(starryNight[0]
    .closest('a'))
    .toHaveProperty('href', `http://localhost/${kebabCase(name)}`);
});

test('Girl with a Pearl Earring pic exists', () => {
  let img = screen.getAllByAltText('Girl with a Pearl Earring');
  expect(img[0]).toBeDefined();
});

test('Girl with a Pearl Earring pic has link to its page', () => {
  const name = 'Girl with a Pearl Earring'

  let img = screen.getAllByAltText(name);
  expect(img[0]
    .closest('a'))
    .toHaveProperty('href', `http://localhost/${kebabCase(name)}`);
});

test('Guernica pic exists', () => {
  let img = screen.getAllByAltText('Guernica');
  expect(img[0]).toBeDefined();
});

test('Guernica pic has link to its page', () => {
  const name = 'Guernica'

  let img = screen.getAllByAltText(name);
  expect(img[0]
    .closest('a'))
    .toHaveProperty('href', `http://localhost/${kebabCase(name)}`);
});

test('Penitent Magdalene pic exists', () => {
  let img = screen.getAllByAltText('Penitent Magdalene');
  expect(img[0]).toBeDefined();
});

test('Penitent Magdalene pic has link to its page', () => {
  const name = 'Penitent Magdalene'

  let img = screen.getAllByAltText(name);
  expect(img[0]
    .closest('a'))
    .toHaveProperty('href', `http://localhost/${kebabCase(name)}`);
});

