import React from "react";
import { useForm } from "react-hook-form";

export default function Test() {
  const [videoAndPhoto, setVideoAndPhoto] = React.useState();
  const { register, handleSubmit } = useForm();
  const photoAndVideoHandle = (e) => {
    console.log(e);
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <div>testing testing time</div>
      is the files attribute correct in the below code
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="file"
          //   files={videoAndPhoto}
          {...register("photoAndVideo", {
            onChange: (e) => {
              console.log(e.target.files, "e.target.files");
              photoAndVideoHandle(e);
              setVideoAndPhoto(e.target.files);
            },
          })}
          //   className={` absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer `}
          // accept=".jpg,.jpeg"
          accept="image/*,video/*"
          multiple
        />
      </form>
    </div>
  );
}
