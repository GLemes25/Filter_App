// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { FarmSelector } from '../../src/farm/farm-selector';
jest.useFakeTimers();
test('FarmSelector', async (done) => {
  const tree = await renderer.create(<FarmSelector />).toJSON();
  expect(tree).toMatchSnapshot();
  done();
});
