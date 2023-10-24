import React from "react";

export default function Preview({ setStage, data, setData }) {
  console.log(data);
  let tableData = data.slice(1);
  function handleDelete(id) {
    const deleteItem = tableData.filter((item, i) => i !== id);
    console.log(deleteItem);
    setData(deleteItem);
    tableData = deleteItem;
  }

  return (
    <>
      <>
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
            {tableData.map((item, i) => {
              return (
                <tr>
                  {/* <th scope="row">{i + 1}</th> */}
                  {item.map((item, i) => (
                    <td key={i}>{item}</td>
                  ))}
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    </>
  );
}
