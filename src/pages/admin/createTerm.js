import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createTerm } from "../../redux/slices/term";
import { Button } from "../../components/custom";
import styled from "styled-components";
import { TermService } from "../../services/termService";
export default function CreateTerm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [termDate, setTermDate] = useState([]);
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      term: "",
      session: "",
    },
  });

  useEffect(() => {
    getCurrentTerm();
  }, []);
  async function getCurrentTerm() {
    try {
      const currentTerm = await TermService.getCurrentTerm();
      setTermDate(currentTerm);
    } catch (error) {
    }
  }
  const onSubmit = async (values) => {
    if (termDate.length > 0) {
      try {
        setLoading(true);
        const response = await TermService.updateTerm(values);
        toast.success("Term updated successfully.");
        setLoading(false);
      } catch (error) {
        toast.error("Unable to update term..");
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        const response = await TermService.createTerm(values);
        toast.success("Term created successfully.");
        getCurrentTerm()
        setLoading(false);
      } catch (error) {
        toast.error("Unable to create term.");
        setLoading(false);
      }
    }
  };
  return (
    <Container className="container p-5">
      <h4 className="m-0">Set Current Term and Session</h4>
      <p className="m-0">Create and update active terms and sessions</p>
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
        <div className="mt-3 field justify-content-between d-flex flex-wrap align-items-center">
        <label> Select Session</label>

          <select {...register("session")}>
            <option value="" disabled>
              CHOOSE SESSION
            </option>
            <option value="2023">2023/2024</option>
            <option value="2024">2024/2025</option>
            <option value="2025 ">2026/2025</option>
          </select>{" "}
        </div>

        <div className="button mt-5">
          {termDate.length > 0  ? (
            <Button blue type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Term"}
            </Button>
          ) : (
            <Button blue type="submit" disabled={loading}>
              {loading ? "Creating..." : "Set Term"}
            </Button>
          )}
        </div>
      </form>
    </Container>
  );
}
const Container = styled.div`
  .form {
    max-width: 300px;
    label {
      font-weight: 500;
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
