import React, {useState} from 'react'
import styled from 'styled-components'
import ModalComponent from '../../components/modal'

import JobNoForm from "../../components/jobNoForm";
import VendorForm from "../../components/vendorForm";
import Table from "../../components/table";

const Container = styled.div`
  background: white;
  padding: 1em;
  border-radius: 4px;
  box-shadow: 0px 0px 5px gray;
  width: 60%;
  margin: 5em auto;
  color: #5c5c5c;

  .order-info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #ecf0f1;
    padding-bottom: 0.5em;

    p {
      margin: 0 1em;
    }
  }

  .order-history {
    display: flex;
    margin: 1em 0;
    border-bottom: 1px solid #ecf0f1;
  }

  .find-service-vendors {
    /* border: 1px solid red; */
    display: flex;
  }
`;

const dataTable = [
  { venId: "#######", vendorName: "#######", rank: "#######", remarks: "#######", },
  { venId: "#######", vendorName: "#######", rank: "#######", remarks: "#######", },
];

const columns = [
  {
    Header: "VenID",
    accessor: "venId",
  },
  {
    Header: "Vendor Name",
    accessor: "vendorName",
  },
  {
    Header: "Rank",
    accessor: "rank",
  },
  {
    Header: "Remarks",
    accessor: "remarks",
  },
];

const General = () => {
  const [modalJobIsOpen, setModalJobIsOpen] = useState(false);
  const [modalVendorIsOpen, setModalVendorIsOpen] = useState(false);
  const [data, setData] = useState({
    jobNoField: "",
    vendorField: "",
    vehicleField: "",
    garageField: "",
    mgrField: "",
    locationField: "",
    marketField: "",
    serviceField: "",
    specField: '',
  });

  const showjobModal = () => {
    setModalJobIsOpen(!modalJobIsOpen);
  }
  const showVendorModal = () => {
    setModalVendorIsOpen(!modalVendorIsOpen);
  }

  const onChangeWithModal = (field, data) => {
    setData({
      ...data,
      [field]: data
    });

    if (field === "jobNoField") {
      return showjobModal();
    }

    return showVendorModal();
  }
  const onChange = e => {
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value
    });
  }

  return (
    <>
      <Container>
        <div className="order-info">
          <p>
            <label>Order No</label>
            <select name="orderNo">
              <option value=""></option>
              <option value="1">####-####-####-###</option>
            </select>
          </p>
          <p>Created</p>
          <p>Status</p>
          <p>Tot Est</p>
          <button>Select</button>
        </div>
        <div className="order-history">
          <div style={{ flexGrow: 1 }}>
            <p>
              <label>Job No</label>
              <input
                className="input-large"
                value={data.jobNoField}
                onClick={showjobModal}
              />
            </p>
            <p>
              <label>Vendor ID</label>
              <input
                className="input-large"
                value={data.vendorField}
                onClick={showVendorModal}
              />
            </p>
          </div>
          <div style={{ flexGrow: 1 }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <label>Vehicle</label>
              <select
                name="vehicleField"
                value={data.vehicleField}
                onChange={onChange}
              >
                <option value=""></option>
                <option value="####-####-####-###">####-####-####-###</option>
              </select>
              <p style={{ padding: "0 0.5em" }}>Veh Sta A</p>
              <button>History</button>
            </p>

            <p>
              <label>Garaje</label>
              <select
                name="garageField"
                value={data.garageField}
                onChange={onChange}
              >
                <option value=""></option>
                <option value="####-####-####-###">####-####-####-###</option>
              </select>
            </p>
            <p>
              <label>Mgr</label>
              <select name="mgrField" value={data.mgrField} onChange={onChange}>
                <option value=""></option>
                <option value="####-####-####-###">####-####-####-###</option>
              </select>
            </p>
            <p>
              <label>Location</label>
              <input
                className="input-large"
                name="locationField"
                onChange={onChange}
              />
            </p>
          </div>
        </div>
        <div className="find-service-vendors">
          <div style={{ flexGrow: 1 }}>
            <h4>Find Service Vendors</h4>
            <p>
              <label>Market</label>
              <select
                name="marketField"
                value={data.marketField}
                onChange={onChange}
              >
                <option value=""></option>
                <option value="CA">CA-Costa Mesa</option>
              </select>
            </p>
            <p>
              <label>Service</label>
              <select
                name="serviceField"
                value={data.serviceField}
                onChange={onChange}
              >
                <option value=""></option>
                <option value="airCond">15-Air Conditioning</option>
              </select>
            </p>
            <div style={{ textAlign: "right", marginRight: "1em" }}>
              <button>Refresh</button>
            </div>
            <div>
              <Table columns={columns} data={dataTable} />
            </div>
          </div>
          <div style={{ flexGrow: 1, marginLeft: "1em", position: "relative" }}>
            <p>
              <label>Spec:</label>
              <br />
              <textarea
                // className="input-large"
                name="specField"
                onChange={onChange}
                rows="10"
                cols="50"
              />
            </p>
            <div
              style={{ position: 'absolute', bottom: '.5em', right: 0 }}
            >
              <button className="btnSpaces">GPS</button>
              <button className="btnSpaces">Handbook</button>
              <button className="btnSpaces">Note</button>
              <button className="btnBlue">OK</button>
              <button className="btnSpaces">Cancel</button>
            </div>
          </div>
        </div>
        <ModalComponent
          modalIsOpen={modalJobIsOpen}
          showjobModal={showjobModal}
          title="Job No"
        >
          <JobNoForm
            closeModal={showjobModal}
            jobNoFounded={onChangeWithModal}
          />
        </ModalComponent>
        <ModalComponent
          modalIsOpen={modalVendorIsOpen}
          showjobModal={showVendorModal}
          title="Vendor"
        >
          <VendorForm
            closeModal={showVendorModal}
            vendorIDFounded={onChangeWithModal}
          />
        </ModalComponent>
      </Container>
    </>
  );
}

export default General