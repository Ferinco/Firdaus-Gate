import styled from "styled-components";

export default function UploadNews() {
  return (
    <Wrapper className="p-5">
      <div className="header d-flex flex-column ">
        <h5>News</h5>
        <p>Post and delete news here...</p>
      </div>
      <div>
        <form>
          <div className="d-flex flex-column">
          <label htmlFor="title">Title</label>
          <input name="title" />
          </div>
          <div className="d-flex flex-column mt-4">
          <label htmlFor="content">Content</label>
          <textArea name="content" />
          </div>
          <button className="mt-3">Post</button>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
input, textArea{
    width: 300px;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 0 3px;
    
}
input{
    height: 30px;
}
label{
    margin: 0;
    font-size: 14px;
    font-weight: 600;
}
button{
    padding: 3px 15px;
    color: white;
    background-color: blue;
    border: 1px solid blue;
}

`;
