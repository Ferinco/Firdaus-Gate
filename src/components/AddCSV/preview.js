import React from "react";
import styled from "styled-components";

export default function Preview({ setStage, data, setData }) {
  console.log(data);
  let tableData = data.slice(1);
  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const handleEdit = (index, newValue) => {
    const updatedData = [...data];
    updatedData[index] = newValue;
    setData(updatedData);
  };

  return (
    <Wrapper className="mt-5 d-flex justify-content-center">
      <div>
        <table className="table">
          <thead>
            <tr>
              {data[0].map((item, i) => (
                <th scope="col" key={i}>
                  {item}
                </th>
              ))}
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => {
              return (
                <tr>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>
                      <input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          handleEdit(index, {
                            ...row,
                            [Object.keys(row)[idx]]: e.target.value,
                          })
                        }
                      />
                    </td>
                  ))}
                  {/* <th scope="row">{i + 1}</th> */}
                  {/* {item.map((item, i) => (
                    <td key={i}>{item}</td>
                  ))} */}

                  <td>
                    <td>
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </td>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: auto;

  input {
    width: fit-content;
  }
`;
