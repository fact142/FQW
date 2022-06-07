import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { AuthInput } from './index';

const testingValue = 'test value';
const testingPlaceholder = 'test placeholder'
const onChange = jest.fn();

const TestingFormInput = () => (
  <AuthInput value={testingValue} onChange={onChange} placeholder={testingPlaceholder}/>
);

describe('FormInput component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<TestingFormInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onChange when the value change ', () => {
    const { getByTestId } = render(<TestingFormInput />);
    const input = getByTestId('form-input');
    userEvent.type(input, '1');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
