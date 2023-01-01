import {test, expect} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react';
import Lightbox from '../components/Lightbox';
import { samplePainting } from '../lib/contants';

const lightBoxProps = {
  painting: samplePainting,
  setIsLightboxOn: jest.fn(() => {})
};

beforeEach(() => {
  render(<Lightbox {... lightBoxProps}/>)
});

test('Painting is rendered', () => {
  const painting = screen.getByAltText(samplePainting.name);
  expect(painting).toBeDefined();
});

test('Close button is rendered', () => {
  const closeButton = screen.getByText('CLOSE');
  expect(closeButton).toBeDefined();
});

test('Clicking close button calls setIsLightboxOn', () => {
  const closeButton = screen.getByText('CLOSE');
  fireEvent.click(closeButton);
  expect(lightBoxProps.setIsLightboxOn).toBeCalled();
});