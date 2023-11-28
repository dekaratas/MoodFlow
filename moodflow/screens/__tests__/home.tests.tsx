import { render } from '@testing-library/react-native';
import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import Home from '../Home/Home';

describe(Home, () => {
  it('should have multiple child components', () => {
    const tree = renderer.create(<Home />).toJSON() as ReactTestRendererJSON;
    expect(tree.children?.length).toBeGreaterThan(0);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the quote header text', () => {
    const { getByText } = render(<Home />);
    const textElement = getByText('Here is your quote of the day:');
    expect(textElement).toBeDefined();
  });

  it('should render the App logo', () => {
    const { getByTestId } = render(<Home />);
    const logoImage = getByTestId('Logo');
    expect(logoImage).toBeDefined();
  });
});
