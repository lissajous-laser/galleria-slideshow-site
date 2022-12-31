import {expect, test} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react';
import { SetStateAction } from 'react';
import SlideshowContent from '../components/SlideshowContent';
import { samplePainting } from '../lib/contants';

const slideshowContentProps = {
  painting: samplePainting,
  setIsLightboxOn: jest.fn((fn: SetStateAction<boolean>) => {})
};

beforeEach(() => {
  render(
    <SlideshowContent {... slideshowContentProps}/>
  );
});

test('Name of painting is rendered', () => {
  const title = screen.getByText(samplePainting.name);
  expect(title).toBeDefined();
});

test('Artist name is rendered', () => {
  const artist = screen.getByText(samplePainting.artist.name);
  expect(artist).toBeDefined();
});

test('Painting is rendered', () => {
  const images = screen.getAllByAltText(`${samplePainting.name} painting`);

  expect(images[0]).toBeDefined();
});

test('Wikipedia link is rendered', () => {
  const link = screen.getByRole('link');
  expect(link).toHaveProperty('href', samplePainting.source);
});

test('Artist picture is rendered', () => {
  const img = screen.getAllByAltText(samplePainting.artist.name);
  expect(img).toBeDefined();
});

test('View image button is rendered', () => {
  const img = screen.getByText('VIEW IMAGE');
  expect(img).toBeDefined();
});

test('Pressing view image button calls setIsLightboxOn', () => {
  const img = screen.getByText('VIEW IMAGE');
  fireEvent.click(img);
  expect(slideshowContentProps.setIsLightboxOn).toBeCalled();
});

test('Year is rendered', () => {
  const year = screen.getByText(samplePainting.year);
  expect(year).toBeDefined();
});

test('Description is rendered', () => {
  const description = screen.getByText(samplePainting.description);
  expect(description).toBeDefined();
});

