import {test, expect} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import SlideshowNav from '../components/SlideshowNav';
import { samplePainting } from '../lib/contants';

const slideshowNavProps = {
  painting: samplePainting,
  urlPathPrev: 'the-prev-painting',
  urlPathNext: 'the-next-painting'
}



beforeEach(() => {
  render(<SlideshowNav {... slideshowNavProps }/>);
});


test('Painting name is rendered', () => {
  const name = screen.getByText(samplePainting.name);
  expect(name).toBeDefined();
});

test('Artist name is rendered', () => {
  const artist = screen.getByText(samplePainting.artist.name);
  expect(artist).toBeDefined();
});

test('Previous button is rendered', () => {
  const prevButton = screen.getByAltText('previous');
  expect(prevButton).toBeDefined();
});

test('Previous button links to urlPathPrev', () => {
  const prevButton = screen.getByAltText('previous');
  expect(prevButton.closest('a'))
    .toHaveProperty(
      'href', `http://localhost/${slideshowNavProps.urlPathPrev}`
    );
});

test('Next button links to urlPathNext', () => {
  const prevButton = screen.getByAltText('next');
  expect(prevButton.closest('a'))
    .toHaveProperty(
      'href', `http://localhost/${slideshowNavProps.urlPathNext}`
    );
});