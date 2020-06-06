import React, { useState } from "react";
import styled from "styled-components";

const CATALOG = [
  { product: 'Duralast Gold / Brake Pads - Front', availability: 6, qty: 2, list: 100, cost: 50 },
  { product: 'Duralast Elite / Brake Pads - Front', availability: 12, qty: 2, list: 100, cost: 50 },
  { product: 'Duralast Max / Brake Pads - Front', availability: 9, qty: 2, list: 100, cost: 50}
];

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

const TaksForm = (props) => {
  const [data, setDate] = useState({
    date: "",
    taskId: "",
    usedParts: "",
    list: "",
    stdLabor: "",
    laborCost: "",
    zm: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDate({
      ...data,
      [name]: value,
    });
  };

  // const onSave = () => {
  //   props.jobNoFounded("jobNoField", "####-####-####");
  // };

  return (
    <Container>
      <p>
        <label>Date</label>
        <input name="date" value={data.date} type="date" />
      </p>
      <p>
        <label>Task ID</label>
        <select name="taskId" value={data.taskId} onChange={handleOnChange}>
          <option value=""></option>
          <option value="####-####-####-###">####-####-####-###</option>
        </select>
      </p>
      <p>
        <label>Used Parts</label>
        <select
          name="usedParts"
          value={data.usedParts}
          onChange={handleOnChange}
        >
          <option value=""></option>
          <option value="####-####-####-###">####-####-####-###</option>
        </select>
      </p>
      <p>
        <label>List</label>
        <select name="List" value={data.List} onChange={handleOnChange}>
          <option value=""></option>
          <option value="####-####-####-###">####-####-####-###</option>
        </select>
      </p>
      <p>
        <label>Std Labor</label>
        <select name="stdLabor" value={data.stdLabor} onChange={handleOnChange}>
          <option value=""></option>
          <option value="####-####-####-###">####-####-####-###</option>
        </select>
      </p>
      <p>
        <label>Labor Cost</label>
        <select
          name="laborCost"
          value={data.laborCost}
          onChange={handleOnChange}
        >
          <option value=""></option>
          <option value="####-####-####-###">####-####-####-###</option>
        </select>
      </p>
      <p>
        <label>Zm</label>
        <input name="zm" value={data.zm} onChange={handleOnChange} />
      </p>

      <div className="btn-container">
        <button onClick={props.closeModal}>Cancel</button>
        <button className="btnBlue">Ok</button>
      </div>
    </Container>
  );
};

export default TaksForm;
