import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store/reducers';
import FilmCard from './index';

const TestingCreatePassword = () => (
  <BrowserRouter>
    <Provider store={store}>
      <FilmCard film={{id: 1, title: 11, duration: 111, year: 2022}}/>
    </Provider>
  </BrowserRouter>
);

describe('CreatePassword form', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(
        <TestingCreatePassword />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render password input', () => {
    const { getByPlaceholderText } = render(
      <TestingCreatePassword />,
    );
    expect(getByPlaceholderText('New password')).toBeInTheDocument();
    expect(getByPlaceholderText('New password')).toBeRequired();
  });
  it('should render confirm password input', () => {
    const { getByPlaceholderText } = render(
      <TestingCreatePassword />,
    );
    expect(getByPlaceholderText('Confirm password')).toBeInTheDocument();
    expect(getByPlaceholderText('Confirm password')).toBeRequired();
  });
  it('should render send button', () => {
    const { getByText } = render(
      <TestingCreatePassword />,
    );
    expect(getByText('Send a link')).toBeInTheDocument();
  });
});

it('should change value when typed', () => {
  const { getByPlaceholderText } = render(
    <TestingCreatePassword />,
  );
  userEvent.type(getByPlaceholderText('New password'), '123456');
  expect(getByPlaceholderText('New password')).toHaveValue('123456');
});
