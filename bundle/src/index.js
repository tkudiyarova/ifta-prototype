import React from "react";

import { BundleContext } from './bundle-context';
import IftaTable from './components/iftaTable'
export { actions } from "../../src/actions";
export { sagaWatcher } from "../../src/sagas";

const namespace = "iftaBundle";

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
