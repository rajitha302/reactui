import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/styles/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";

//import dev tools extension
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagas/index";

import { BrowserRouter } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  spacing: 8,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App theme={theme} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
