import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { AuthButton } from './index';


const buttonText = 'test text';

const TestingFormButton = () => <AuthButton text={buttonText} />;

describe('FormButton component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <TestingFormButton />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render text from props', () => {
    const { getByText } = render(
      <TestingFormButton />,
    );
    expect(getByText(buttonText)).toBeInTheDocument();
  });
});
