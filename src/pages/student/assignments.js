import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/custom";
import { ScienceSubjects } from "../../configs/subjectsConfig";
import { Icon } from "@iconify/react";
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
    name: "photos",
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
      <div className="header d-flex flex -row justify-content-between flex-wrap p-3 col-lg-8 w-100">
        <div className="d-flex flex-column gap-3">
          <h3>ASSIGNMENTS</h3>
          <div className="status">
            <h6>0 submitted</h6>
            <h6>3 assignments</h6>
          </div>
        </div>
        <div>
          <Icon icon="wpf:books" className="big-icon" />
        </div>
      </div>
      <div className="form-div col-lg-8 p-3 mt-5">
        <form className="form " onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-row justify-content-between flex-wrap mt-3">
            <label
              className="label m-0 d-flex justify-content-center align-items-center"
              htmlFor="subject"
            >
              <span>*</span>Subject :
            </label>
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
          <div className="d-flex flex-row justify-content-between flex-wrap mt-3">
            <label
              className="label m-0 d-flex justify-content-center align-items-center"
              htmlFor="subject"
            >
              <span>*</span>Topic :
            </label>
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
          <div className="d-flex flex-row justify-content-between flex-wrap mt-3">
            <label
              className="label m-0 d-flex justify-content-center align-items-center"
              htmlFor="name"
            >
              <span>*</span>Name :
            </label>

            <input
              placeholder="Name of Assignment"
              {...register("name")}
              name="name"
              className="input"
            ></input>
          </div>
          <div className="file-div d-flex flex-column gap-3 align-items-start mt-5 py-3">
            <div className="photo-upload-container  m-0">
              {fields.map((item, index) => (
                <div key={item.id} className="photo-input d-flex flex-column">
                  <label className="label" htmlFor={`photos[${index}]`}>
                    {previewImages[index] ? (
                      <div className="image">
                        <img
                          src={previewImages[index]}
                          alt={`Preview ${index}`}
                          className=""
                        />
                        <div className="d-flex flex-row justify-content-end w-100 remove-div">
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="remove-btn "
                          >
                            {" "}
                            -{" "}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="m-0">Upload Photo {index + 1}</p>
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
            <button
              type="button"
              onClick={() => append({})}
              className="add-btn  d-flex flex-row align-items-center p-0 m-0"
            >
              <Icon icon="material-symbols:add" className="icon m-0" />
              Add Another Photo
            </button>
          </div>
          <div className="button-div d-flex justify-content-start gap-3">
            <Button blue type="submit">
              Submit
            </Button>
            <button type="button" onClick={() => ResetForm()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .header {
    border-radius: 20px;
    background-color: rgba(158, 160, 231, 0.7);
    backdrop-filter: blur(10px);
    color: white;
  }
  .big-icon {
    color: grey;
    font-size: 100px;
    @media (max-width: 558px) {
      font-size: 70px;
    }
    @media (max-width: 506px) {
      font-size: 50px;
    }
    /* @media (max-width: 485px) {
          font-size: 100px;
        }
        @media (max-width: 455px) {
          font-size: 70px;
        } */
  }
  .form-div {
    background-color: white;
    border-radius: 20px;
  }
  .label {
    font-weight: 600;
    font-size: 14px;
  }
  .image {
    width: 70px;
    height: 100px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
  .remove-btn {
    position: absolute;
    background-color: red;
    color: white;
    margin-top: -100px;
    border: 0;
    border-radius: 50%;
    height: fit-content;
    padding: 0 5px;
    font-size: 13px;
    font-weight: 600 !important;
  }
  span {
    font-size: 14px;
  }
  .add-btn {
    background: transparent;
    color: blue;
    padding: 0 !important;
    font-size: 14px;
    width: fit-content !important;
    height: fit-content !important;
    text-decoration: underline;
    border: 0;
    .icon {
      color: grey !important;
      font-size: 30px !important;
    }
  }
  .label {
    span {
      color: red;
    }
  }
  .file-div {
    border-top: 1px solid grey;
  }
  .input {
    width: 600px;
    padding: 10px 7px;
    border: 1px solid grey;
    border-radius: 10px;
    font-size: 15px;
  }
`;
