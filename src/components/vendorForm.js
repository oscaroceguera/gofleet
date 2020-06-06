import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #5c5c5c;
  p {
    margin: 0.5em;
  }
  .btn-container {
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #ecf0f1;
    padding: 0.5em;

    button {
      margin: 0 0.5em;
    }
  }
`;

const JobNoForm = (props) => {
  const [data, setDate] = useState({
    vendorId: "",
    vendorName: "",
    street: "",
    city: "",
    city2: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDate({
      ...data,
      [name]: value,
    });
  };

  const onSave = () => {
    props.vendorIDFounded('vendorField', "####-####-####");
  };

  return (
    <Container>
      <p>
        <label>Vendor ID</label>
        <input
          onChange={handleOnChange}
          name="vendorId"
          value={data.vendorId}
        />
      </p>
      <p>
        <label>Vendor Name</label>
        <input
          onChange={handleOnChange}
          name="vendorName"
          value={data.vendorName}
        />
      </p>
      <p>
        <label>Street</label>
        <input onChange={handleOnChange} name="street" value={data.street} />
      </p>
      <p>
        <label>City</label>
        <input onChange={handleOnChange} name="city" value={data.city} />
        <input
          onChange={handleOnChange}
          name="city2"
          value={data.city2}
        />
      </p>

      <div className="btn-container">
        <button onClick={props.closeModal}>Cancel</button>
        <button className="btnBlue" onClick={onSave}>
          Ok
        </button>
      </div>
    </Container>
  );
};

export default JobNoForm;
