import React from "react";
import { createActions, createReducer } from "re-reduced";
import { toUpper } from "ramda";
import { takeEvery, call } from "redux-saga/effects";
import { actions } from "../../../src/actions";
import { BundleContext } from './bundle-context';
import IftaTable from './components/iftaTable'

const namespace = "iftaBundle";

function* setNameSaga() {
  yield call(console.log, "setNameSaga is triggered");
}

export function* sagaWatcher() {
  yield takeEvery(actions.fetchIftaRecords.type, setNameSaga);
}

const Component = props => {
  const {
    deps: { useActions, useReduxState, getUiLib }
  } = props;

  return (
    <BundleContext.Provider value={props.deps}>
      <div>IFTA Bundle</div>
      <IftaTable />
    </BundleContext.Provider>
  );
};

export const routes = [
  {
    isBundleRoute: true,
    bundleComponent: Component,

    exact: true,
    path: "/ifta-service",
    key: "/ifta-service"
  }
];
