import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import Home from '../Home/Home';

describe(Home, () => {
  it('should pass', () => {
    const tree = renderer.create(<Home />).toJSON() as ReactTestRendererJSON[];
    console.log(Array.isArray(tree));
    const testTree = Array.from(tree);
    testTree.forEach((node) => {
      expect(node.children?.length).toBe(1);
    });
  });
});
