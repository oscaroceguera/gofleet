import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;
  width: 80%;
  margin: 5em auto;
  
  .order-info {
    border: 1px solid red;
    display: flex;
    justify-content: flex-end;
  }
`

const General = () => {
  return (
    <>
      <h1>General</h1>
      <Container>
        <div className="order-info">
          <input placeholder="Order No" />
          <button>Select</button>
        </div>
      </Container>
    </>
  );
}

export default General