import React, {useState} from "react";
import styled from "styled-components";
import Table from "../../components/table";
import ModalComponent from "../../components/modal";
import TaskForm from "../../components/taskForm";

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

const dataTable = [];

const columns = [
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Tasks ID",
    accessor: "tasksId",
  },
  {
    Header: "Used Parts",
    accessor: "usedParts",
  },
  {
    Header: "List",
    accessor: "list",
  },
  {
    Header: "Std Labor",
    accessor: "stdLabor",
  },
  {
    Header: "Labor cost",
    accessor: "laborCost",
  },
  {
    Header: "Zm",
    accessor: "zm",
  },
];

const Tasks = () => {
  const [data, setData] = useState({
    textAreaSpec: "",
    // vendorField: "",
    // vehicleField: "",
    // garageField: "",
    // mgrField: "",
    // locationField: "",
    // marketField: "",
    // serviceField: "",
    // specField: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };


  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <Container>
      <p>
        <textarea
          // className="input-large"
          name="textAreaSpec"
          onChange={onChange}
          rows="8"
          cols="100"
        />
      </p>

      <div>
        <div style={{ textAlign: "right", marginRight: "1em" }}>
          <button className="btnBlue" onClick={showModal}>
            + Add
          </button>
        </div>
        <Table columns={columns} data={dataTable} />
      </div>
      <ModalComponent
        modalIsOpen={modalIsOpen}
        showjobModal={showModal}
        title="Add Task"
      >
        <TaskForm closeModal={showModal} />
      </ModalComponent>
    </Container>
  );
};

export default Tasks;
