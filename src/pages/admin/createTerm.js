import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createTerm } from "../../redux/slices/term";
import { Button } from "../../components/custom";

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
    <div className="container">
      <h1>Create term</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> Select Term</label>
          <select {...register("name")}>
            <option value="Select term" disabled selected>
              Select term
            </option>
            <option value="FIRST TERM">FIRST TERM</option>
            <option value="SECOND TERM">SECOND TERM</option>
            <option value="THIRD TERM">THIRD TERM</option>
          </select>
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="date"
            placeholder="Pick start date"
            {...register("startDate")}
          />
        </div>

        <div>
          <label>End Date</label>
          <input
            type="date"
            placeholder="Pick end date"
            {...register("endDate")}
          />
        </div>

        <Button blue type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create"}
        </Button>
      </form>
    </div>
  );
}
