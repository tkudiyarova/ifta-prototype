import React, { useEffect } from "react";
import { connectWithActions } from "re-reduced";
import { Table } from "@eroad/ui-library";

import { IFTA_TABLE_COLUMNS } from "../constants"
import { actions } from "../actions";
import { getIftaRecords } from "../selectors";

export const IftaDashboard = (props) => {
  useEffect(() => {
    props.actions.fetchIftaRecords();
  }, [actions]);

  return (
    <Table
      dataSource={props.iftaRecords}
      columns={IFTA_TABLE_COLUMNS}
      rowClassName="ifta-table-row"
      rowKey={(record) => record.id}
    />
  );
};

const enhance = connectWithActions(
  actions,
  {
    iftaRecords: getIftaRecords
  }
);

export default enhance(IftaDashboard);
