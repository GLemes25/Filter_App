// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { Splash } from '../../src/application/application-splash';
jest.useFakeTimers();
test('Splash', async (done) => {
  const tree = await renderer.create(<Splash />).toJSON();
  expect(tree).toMatchSnapshot();
  done();
});
