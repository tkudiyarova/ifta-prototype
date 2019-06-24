import React, { createContext, useContext } from 'react';

export const BundleContext = createContext();

export const useBundleContext = () => useContext(BundleContext);
