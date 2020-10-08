import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import { createUser, plusOne, minusOne, names, addName, addUser } from './actions';

import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//manual dispatch of the actions to the reducer in order to change state

store.dispatch(createUser('John', 'Canada', 33));
store.dispatch(plusOne());
store.dispatch(plusOne());
store.dispatch(minusOne());
const tomPerson = createUser('Tom', 'Brazil', 22);
const johanPerson = createUser('Johan', 'France', 33)
store.dispatch(addUser(tomPerson.payload));
store.dispatch(addUser(johanPerson.payload));

store.dispatch(createUser('An', 'USA', 42));
store.dispatch(names('Arnold', 'Adam', 'Enn'));
store.dispatch(addName('Jack'));

//

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

