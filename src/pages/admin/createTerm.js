import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createTerm } from "../../redux/slices/term";
import { Button } from "../../components/custom";
import styled from "styled-components";
import { TermService } from "../../services/termService";
export default function CreateTerm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      term: "",
      session: "",
    },
  });
  const onSubmit = async (values) => {
    try {
      const response = await TermService.createTerm(values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };



// Somewhere in your code where you need to retrieve the current term
async function getCurrentTerm() {
  try {
    const currentTerm = await TermService.getCurrentTerm();
    console.log("Current Term:", currentTerm);
    // Do something with the current term, such as updating state or displaying it in the UI
  } catch (error) {
    console.error("Error fetching current term:", error);
    // Handle the error, such as displaying an error message to the user
  }
}

// Call the getCurrentTerm function
getCurrentTerm();

  return (
    <Container className="container p-5">
      <h4>Set Current Term</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="form mt-5">
        <div className="mt-3 field justify-content-between d-flex flex-wrap align-items-center">
          <label> Select Term</label>
          <select {...register("term")}>
            <option value="" disabled>
              CURRENT TERM
            </option>
            <option value="FIRST TERM">FIRST TERM</option>
            <option value="SECOND TERM">SECOND TERM</option>
            <option value="THIRD TERM">THIRD TERM</option>
          </select>
        </div>
        <div>
        <select {...register("session")}>
            <option value="" disabled>
              CHOOSE SESSION
            </option>
            <option value="2023">2023/2024</option>
            <option value="2024">2024/2025</option>
            <option value="2025 ">2026/2025</option>
          </select> </div>

        <div className="button mt-5">
          <Button blue type="submit" disabled={loading}>
            {loading ? "Creating..." : "Set Term"}
          </Button>
        </div>
      </form>
    </Container>
  );
}
const Container = styled.div`
  .form {
    max-width: 270px;
    label {
      font-weight: 600;
    }
    input {
      width: fit-content;
    }
    select {
      width: 160px !important;
    }
    input,
    select {
      padding: 5px;
      outline: 0;
      border: 1px solid grey;
    }
  }
`;
