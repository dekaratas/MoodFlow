
import renderer from 'react-test-renderer';
import React from "react"
import { render, fireEvent, waitFor  } from "@testing-library/react-native"
import Chart from '../chart/chart';

describe('Chart', () => {
  it('should render the page', () => {
    const tree = renderer.create(<Chart/>).toJSON;
    expect(tree).toMatchSnapshot();
  })
  it('renders correctly', () => {
    const { getByTestId } = render(<Chart />);
    expect(getByTestId('list')).toBeTruthy();
    expect(getByTestId('listItem-Sleep quality')).toBeTruthy();
  });

})
