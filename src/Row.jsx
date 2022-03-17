import React from 'react'
import styled from 'styled-components'

const Row = ({ rowIndex, setNumbers, numbers }) => {

  const handleInput = (e) => {
    // numbers only
    const re = /^[1-9]{1}$/g;
    if (!re.test(e.key)) e.preventDefault();
  }

  return ( 
    <div>
        {[...Array(9)].map((x, colIndex) => (
            <Box 
              key={colIndex}
              maxLength={1}
              onKeyPress={handleInput}
              onChange={e => setNumbers(e, rowIndex, colIndex)}
              autoComplete='off'
              rowIndex={rowIndex}
              colIndex={colIndex}
              value={numbers[colIndex]}
            />
        ))}
    </div>
  )
}

export default Row;

const Box = styled.input`
  text-align: center;
  font-weight: bold;
  width: 25px;
  height: 25px;

  margin-right: ${(props) => (
    [2,5].includes(props.colIndex) && ('4px;')
  )};

  margin-bottom: ${(props) => (
    [2,5].includes(props.rowIndex) && ('4px;')
  )};

  @media screen and (min-width: 450px) {
    width: 40px;
    height: 40px;
    font-size: 17pt;
  }
`
