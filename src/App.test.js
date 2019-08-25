import React from 'react';
import ReactDOM from 'react-dom';
import {create} from 'react-test-renderer';
import App from './App';
import randomNumbersGenerator from './helpers/phoneNumberGenerator'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('contains correct length of numbers array', () => {

  const appComponent = create(
    <App/>,
  );
  const instance = appComponent.getInstance()
  expect(instance.state.phoneNumbers.length).toEqual(10000)
});

it('generates a new set of numbers', () => {
  const generatorSpy = jest.spyOn(randomNumbersGenerator, 'randomPhoneNumbers')
  const appComponent = create(
    <App/>,
  );
  const instance = appComponent.getInstance()
  instance.generateNumbers()
  expect(generatorSpy).toHaveBeenCalled()
})