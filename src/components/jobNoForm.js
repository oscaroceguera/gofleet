import React, {useState} from 'react'
import styled from 'styled-components'

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
    vehicle: '',
    garage: '',
    jobstatus: '',
    createWithinDay: ''
  })

  const handleOnChange = e => {
    const {name, value} = e.target
    setDate({
      ...data,
      [name]: value
    })
  }

  const onSave = () => {
    props.jobNoFounded('jobNoField', '####-####-####')
  }

  return (
    <Container>
      <p>
        <label>Vehicle</label>
        <select name="vehicle" onChange={handleOnChange}>
          <option value=""></option>
          <option value="####-####-####-###">####-####-####-###</option>
        </select>
      </p>
      <p>
        <label>Garage</label>
        <select name="garage" onChange={handleOnChange}>
          <option value=""></option>
          <option value="####-####-####-###">####-####-####-###</option>
        </select>
      </p>
      <p>
        <label>Job Status</label>
        <select name="jobStatus" onChange={handleOnChange}>
          <option value=""></option>
          <option value="####-####-####-###">####-####-####-###</option>
        </select>
      </p>
      <p>
        <label>Created within</label>
        <input
          className="input-small"
          onChange={handleOnChange}
          name="createWithinDay"
          value={data.createWithinDay}
        />
        <label>days</label>
      </p>
      <div className="btn-container">
        <button onClick={props.closeModal}>Cancel</button>
        <button className="btnBlue" onClick={onSave}>
          Ok
        </button>
      </div>
    </Container>
  );
}

export default JobNoForm