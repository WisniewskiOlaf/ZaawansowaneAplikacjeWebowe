import React from "react";
import { Table } from "reactstrap";
import NewDataModal from "./NewDataModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

function DataList(props){
    const data = props.data;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!data || data.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            data.map(d => (
              <tr key={d.pk}>
                <td>{d.data}</td>
                <td align="center">
                  <NewDataModal
                    create={false}
                    data={d}
                    resetState={props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={d.pk}
                    resetState={props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
}

export default DataList;
