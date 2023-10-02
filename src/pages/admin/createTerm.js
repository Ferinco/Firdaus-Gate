import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createTerm } from "../../redux/slices/term";
import { Button } from "../../components/custom";
import styled from "styled-components"
export default function CreateTerm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register } = useForm({
    defaultValues: {
      startDate: "",
      name: "",
      endDate: "",
    },
  });
  const onSubmit = (values) => {
    setLoading(true);
    dispatch(createTerm(values))
      .unwrap()
      .then((res) => {
        setLoading(false);
        console.log(res);
        toast.success(`${res.data.name} created successfully`);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        if (error.response.data.message)
          toast.error(error.response.data.message);
      });
  };
  return (
    <Container className="container p-5">
      <h4>Set Current Term</h4>
      <p>set start and end date of current term.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="form mt-5">
        <div className="mt-3 field justify-content-between d-flex flex-wrap align-items-center">
          <label> Select Term</label>
          <select {...register("name")}>
            <option value="" disabled>
              CURRENT TERM
            </option>
            <option value="FIRST TERM">FIRST TERM</option>
            <option value="SECOND TERM">SECOND TERM</option>
            <option value="THIRD TERM">THIRD TERM</option>
          </select>
        </div>
        <div className="mt-3 field justify-content-between d-flex flex-wrap align-items-center">
          <label>Start Date</label>
          <input
            type="date"
            placeholder="Pick start date"
            {...register("startDate")}
          />
        </div>

        <div className="mt-3 field justify-content-between d-flex flex-wrap align-items-center">
          <label>End Date</label>
          <input
            type="date"
            placeholder="Pick end date"
            {...register("endDate")}
          />
        </div>

<div className="button mt-5">
        <Button blue type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create"}
        </Button>
</div>
      </form>
    </Container>
  );
}
const Container = styled.div`
.form{
  max-width: 270px;
  label{
    font-weight: 600;
  }
  input{
    width: fit-content;
  }
  select{
    width: 160px !important;
  }
  input, select{
padding: 5px;
outline: 0;
border: 1px solid grey;
  }
}
`