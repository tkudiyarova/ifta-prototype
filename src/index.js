import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import "@eroad/ui-library/dist/ui-library.css";

import './index.css';
import IftaDashboard from './components/IftaDashboard';

const rootElement = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <IftaDashboard />
  </Provider>,
  rootElement
);
