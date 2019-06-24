import { createReducer } from 're-reduced';
import { combineReducers } from "redux";
import { actions } from "../actions";
// import fetchMock from 'fetch-mock';
// import iftaRecordsMock from '../fixtures/iftaRecords';

const iftaRecordsMock = [
  {
    id: 0,
    jurisdictionId: 0,
    vehicleId: '2018-06-01',
    fuelType: 'Petrol',
    totalDistance: '129'
  },
  {
    id: 1,
    jurisdictionId: 0,
    vehicleId: '2018-06-01',
    fuelType: 'Diesel',
    totalDistance: '87'
  },
  {
    id: 2,
    jurisdictionId: 0,
    vehicleId: '2018-06-01',
    fuelType: 'Petrol',
    totalDistance: '342'
  }
];

export const INITIAL_STATE = {
  iftaRecords: [],
};

export const reducer = combineReducers({
  iftaRecords: createReducer(
    [actions.fetchIftaRecords.reduce((state, payload) => iftaRecordsMock)],
    INITIAL_STATE.iftaRecords
  )
});
