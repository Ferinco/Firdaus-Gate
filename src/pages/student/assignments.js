import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/custom";
import { ScienceSubjects } from "../../configs/subjectsConfig";
export default function Assignments() {
  // to manage photo upload and photo preview
  const [previewImages, setPreviewImages] = useState([]);
  const [AnswerPhotos, setAnswerPhotos] = useState([]);

  // resolvers for assignment form
  const schema = yup.object({
    name: yup.string().required("input first name"),
    subject: yup.string().required("subject is required"),
    topic: yup.string().required("topic is required"),
    assignmentSolution: yup
      .mixed()
      .required("photo is required")
      .test("fileType", "Unsupported file type", (value) => {
        if (value && value.type) {
          return value.type.includes("image");
        }
        return true;
      }),
  });
  const {
    handleSubmit,
    register,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      topic: "",
      subject: "",
      photos: [{}], 
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'photos',
  });

//to hanle file selections
const handleFileChange = (e, index) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const updatedPreviews = [...previewImages];
        updatedPreviews[index] = reader.result;
        setPreviewImages(updatedPreviews);
      };

      reader.readAsDataURL(file);
    }
  };

  // on submit of assignment
  const onSubmit = async (values) => {
    console.log(values);
    console.log("values");
  };
  function ResetForm() {
    reset();
  }
  return (
    <Container className="container py-5 ">
      <div className="header d-flex flex -row justify-content-start flex-wrap">
        <h6>Assignments</h6>
      </div>
      <div className="form-div">
        <form className="form " onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-row justify-content-between"> 
            <label htmlFor="subject">Subject :</label>
            <select name="subject" {...register("subject")} className="input">
              <option value="" disabled>
                Select Subject
              </option>
              {ScienceSubjects.map((subject) => (
                <option value={subject.code}>
                  {subject.name}({subject.code})
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex flex-row justify-content-between"> 
            <label htmlFor="subject">Topic :</label>
            <select name="subject" {...register("topic")} className="input">
              <option value="" disabled>
                Select Topic
              </option>
              {ScienceSubjects.map((subject) => (
                <option value={subject.code}>
                  {subject.name}({subject.code})
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex flex-row justify-content-between"> 
                       <label htmlFor="name">Name :</label>

              <input 
              placeholder="Name of Assignment"
              {...register("name")}
              name="name"
              className="input"
              >
              </input>
          </div>
          <div className="file-div d-flex flex-row justify-content-start align-items-center">
          <div className="photo-upload-container">
        {fields.map((item, index) => (
          <div key={item.id} className="photo-input">
            <label htmlFor={`photos[${index}]`}>
              {previewImages[index] ? (
              <div className="image">
                <img src={previewImages[index]} alt={`Preview ${index}`}  className=""/>
<div className="d-flex flex-row justify-content-end w-100 remove-div">
<button type="button" onClick={() => remove(index)} className="remove-btn "> - </button>

</div>
              </div>
              ) : (
                <span>Upload Photo {index + 1}</span>
              )}
              <input
                type="file"
                id={`photos[${index}]`}
                {...register(`photos[${index}]`)}
                onChange={(e) => handleFileChange(e, index)}
              />
            </label>

          </div>
        ))}
      </div>
       <button type="button" onClick={() => append({})}>
        Add Another Photo
      </button>
          </div>
          <div className="button-div d-flex justify-content-start gap-3">
            <Button blue type="submit">
              Submit
            </Button>
            <button type="button" onClick={()=> ResetForm()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
.image{
width:70px;
height:100px;
overflow: hidden;
img{
width:100%;
height:100%;
object-fit:cover;
display:block;
}
}
.remove-btn{
    position:absolute;
    background-color: red;
    color: white;
    margin-top: -100px;
    border:0;
    border-radius: 50%;
    height: fit-content;
    padding: 0 5px;
    font-size: 13px;
    font-weight: 600 !important;
    
}
`;
