import React from "react";
import { useBundleContext } from '../bundle-context';

export const IftaTable = () => {
  const { getUiLib } = useBundleContext();
  const Table = getUiLib('Table');

  return (
    <Table
      dataSource={iftaRecords}
      columns={IFTA_TABLE_COLUMNS}
      rowClassName="ifta-table-row"
      rowKey={(record) => record.id}
    />
  )
};

const iftaRecords = [
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

export const IFTA_TABLE_COLUMNS = [
  {
    title: "Jurisdiction",
    dataIndex: "jurisdictionId",
    key: "jurisdictionId",
    className: "jurisdiction-cell"
  },
  {
    title: "Vehicle",
    dataIndex: "vehicleId",
    key: "vehicleId",
    className: "vehicle-cell"
  },
  {
    title: "Fuel Type",
    dataIndex: "fuelType",
    key: "fuelType",
    className: "fuel-type-cell"
  },
  {
    title: "Total Distance (km)",
    dataIndex: "totalDistance",
    key: "totalDistance",
    className: "total-distance-cell"
  }
]

export default IftaTable;
