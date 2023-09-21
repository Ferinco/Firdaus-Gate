import { Button } from "../../components/custom/Button";
import { Header } from "../../components/custom/Header";
import styled from "styled-components";

export default function Update() {
  return (
    <Wrapper className="container d-flex py-5 flex-column">
      <Header>
        <h5>Create Student Profile</h5>
        <h3>enter details here...</h3>
      </Header>
      <div className="form-wrapper d-flex justify-content-center flex-column align-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-3">
            <input
              placeholder="firstname"
              name="firstname"
              type="text"
              {...register("firstname", { required: true })}
            />
          </div>
          <div className="my-3">
            <input
              placeholder="lastname"
              name="firstname"
              type="text"
              {...register("lastname", { required: true })}
            />
          </div>
          <div className="my-3">
            <input
              placeholder="admission number"
              name="admissionNumber"
              type="number"
              {...register("admissionNumber", { required: true })}
            />
          </div>
          <div className="mt-4">
            <Button blue type="submit">
              Create Profile
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 700px;
  gap: 40px;
  .form-wrapper {
    max-width: 700px;
  }
  input {
    border-radius: 10px;
    padding: 14px 16px;
    background-color: #f1f1f1;
    border: none;
    outline: none;
    width: 400px;
  }
`;
