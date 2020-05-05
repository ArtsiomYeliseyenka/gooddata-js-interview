// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'store';
import App from 'components/app';
import 'common/css/reset.scss';
import { registerServiceWorker } from 'common/utils';

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
