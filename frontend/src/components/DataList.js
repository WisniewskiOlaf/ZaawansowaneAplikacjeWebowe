import React from "react";
import { Table } from "reactstrap";
import NewDataModal from "./NewDataModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
<<<<<<< HEAD
class DataList extends Component {
render() {
const data = this.props.data;
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
<b>Ops, no one here yet!</b>
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
resetState={this.props.resetState}
/>
&nbsp;&nbsp;
<ConfirmRemovalModal
pk={d.pk}
resetState={this.props.resetState}
/>
</td>
</tr>
))
)}
</tbody>
</Table>
);
}
=======

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
>>>>>>> 1c7a83058326e7d232cebc13ee838419833ddd15
}
export default DataList;
