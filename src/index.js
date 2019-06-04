import React from "react";
import { render } from "react-dom";
import {
  Form,
  Select,
  SelectItem,
  TextInput,
  Button,
  Dropdown,
  Notification
} from "carbon-components-react";
import { SecurityMessages } from "./SecurityMessages";
import { DataTable } from "carbon-components-react";
import "./form.css";
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader
} = DataTable;

const PolicyRuleAction = [
  { id: "approve", text: SecurityMessages.policyEditor.FORM.action.approve },
  {
    id: "prompt2FA",
    text: SecurityMessages.policyEditor.FORM.action.prompt2FA
  },
  { id: "deny", text: SecurityMessages.policyEditor.FORM.action.deny }
];

const headers = [
  { key: "type", header: "Type" },
  { key: "condition", header: "Condition" }
];

// const flexStyle = {
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "flex-start"
// };
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      condition: "",
      action: "",
      showDetails: "",
      data: [
        { id: "1", type: "t", condition: "match" },
        { id: "2", type: "f", condition: "no match" }
      ]
    };
  }

  handleChange(ev, field) {
    //tslint:disable-line no-any
    console.log(ev.target.value, field);
    var newState = { ...this.state, [field]: ev.target.value };
    this.setState({ ...newState });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const dataEl = {
      id: new Date().getTime() + "",
      type: this.state.type,
      condition: this.state.condition
    };
    let { data } = { ...this.state };
    data = [dataEl].concat(data);
    this.setState({ data: data, showMsg: true });
    console.log("submitted", data, { ...this.state });
  }

  render() {
    return (
      <React.Fragment>
        <div className={`flex ${this.state.showDetails ? "panel-active" : ""}`}>
          <div id="main-panel">
            <Form
              {...{
                onSubmit: ev => this.handleSubmit(ev)
              }}
            >
              <div className="flex">
                <div className="flexItem">
                  <Select
                    id="select-type"
                    defaultValue="placeholder-item"
                    labelText="Type"
                    {...{ onChange: ev => this.handleChange(ev, "type") }}
                  >
                    <SelectItem
                      disabled
                      hidden
                      value="placeholder-item"
                      text="Choose an option"
                    />
                    <SelectItem value="group" text="Group" />
                    <SelectItem value="ip" text="IP" />
                    <SelectItem value="geo" text="Geolocation" />
                  </Select>
                </div>
                <div className="flexItem">
                  <TextInput
                    id="condition"
                    labelText="Condition"
                    value={this.state.condition}
                    {...{
                      onChange: ev => {
                        this.handleChange(ev, "condition");
                      }
                    }}
                  />
                </div>
                <Button type="submit" small={true}>
                  Submit
                </Button>
              </div>
            </Form>
            {console.log("data", this.state.data)}
            <DataTable
              rows={this.state.data}
              headers={headers}
              render={({ rows, headers, getHeaderProps }) => (
                <TableContainer title="Data Table">
                  <Table>
                    <TableHead>
                      <TableRow>
                        {headers.map(header => (
                          <TableHeader {...getHeaderProps({ header })}>
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => {
                        console.log("row", row);
                        return (
                          <TableRow
                            key={row.id}
                            onClick={() =>
                              this.setState({ showDetails: row.id })
                            }
                          >
                            {row.cells.map(cell => (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            ))}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            />
          </div>
          {this.state.showDetails && (
            <div id="detail-panel">
              <button
                className="bx--modal-close"
                onClick={() => this.setState({ showDetails: "" })}
              >
                X
              </button>
              <div className="details-content">
                <h1>Details</h1>
                {this.state.showDetails}
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
