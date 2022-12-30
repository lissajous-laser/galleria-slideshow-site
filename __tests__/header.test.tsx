import {expect, test} from '@jest/globals';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Header from '../components/Header';

test('logo is rendered', () => {
  render(<Header isSlideshowOn={false}/>);
  const logo = screen.getByAltText('galleria');
  expect(logo).toBeDefined();
});


test('toggleSlideshow link is rendered', () => {
  render(<Header isSlideshowOn={false}/>);
  const link = screen.getByRole('link');
  expect(link).toBeDefined();
});


test('given isSlideshowOn of false, link text is START SLIDESHOW', () => {
  render(<Header isSlideshowOn={false}/>);
  const link = screen.getByText('START SLIDESHOW');
  expect(link).toBeDefined();
});

test('given isSlideshowOn of false, link is to first painting', () => {
  render(<Header isSlideshowOn={false}/>);
  const link = screen.getByRole('link');
  expect(link).toHaveProperty('href', 'http://localhost/starry-night');
});

test('given isSlideshowOn of true, link text is STOP SLIDESHOW', () => {
  render(<Header isSlideshowOn={true}/>);
  const link = screen.getByText('STOP SLIDESHOW');
  expect(link).toBeDefined();
});

test('given isSlideshowOn of true, link is to index', () => {
  render(<Header isSlideshowOn={true}/>);
  const link = screen.getByRole('link');
  expect(link).toHaveProperty('href', 'http://localhost/');
});