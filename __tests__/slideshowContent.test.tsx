import {expect, test} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react';
import { SetStateAction } from 'react';
import SlideshowContent from '../components/SlideshowContent';
import { PaintingData } from '../lib/types';

const samplePainting: PaintingData = {
  "name": "Mona Lisa",
  "year": 1503,
  "description": "The Mona Lisa (/ˌmoʊnə ˈliːsə/; ...",
  "source": "https://en.wikipedia.org/wiki/Mona_Lisa",
  "artist": {
    "image": "./assets/mona-lisa/artist.jpg",
    "name": "Leonardo da Vinci"
  },
  "images": {
    "thumbnail": "./assets/mona-lisa/thumbnail.jpg",
    "hero": {
      "small": "./assets/mona-lisa/hero-small.jpg",
      "large": "./assets/mona-lisa/hero-large.jpg"
    },
    "gallery": "./assets/mona-lisa/gallery.jpg"
  },
  "metadata": {
    "gallery": {
      "width": 509,
      "height": 712
    },
    "thumbnail": {
      "width": 327,
      "height": 525
    },
    "index": 13
  } 
};

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

