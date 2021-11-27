import { Alert, AlertTitle, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../../hooks/useFirebase";



const AddReview = () => {
  const { user } = useFirebase();
  const [success,setSuccess] =useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://fierce-gorge-17477.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
      setSuccess(true)
      reset('');
  };
  return (
      <div>
        <h1 className="mt-5 text-center text-danger">Please Review Us</h1>
        <div className=" w-25 m-auto mt-5">
        {
          success && <Alert severity="success">
          <AlertTitle>Review Added Successfully...</AlertTitle>
        </Alert>
        }
          <div className=" ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
              <input
                  {...register("userName", { required: true })}
                  placeholder={user.displayName}
                  defaultValue={user.displayName}
                  className="p-2 m-2 w-100 input-field"
                />
                <br/>
                <input
                  {...register("email",{ required: true })}
                  placeholder={user.email}
                  defaultValue={user.email}
                  className="p-2 m-2 w-100 input-field"
                />
                <br/>
                <input
                  {...register("review",{ required: true })}
                  placeholder="Type Your Review"
                  className="p-2 m-2 w-100 input-field"
                />
                <br/>

                <input
                  {...register("image", { required: true })}
                  placeholder="Your Photo Link"
                  className="p-2 m-2 w-100 input-field"
                />
                <br/>

                <input
                  {...register("country", { required: true })}
                  placeholder="Your Country Name"
                  className="p-2 m-2 w-100 input-field"
                />
                <br/>
                <input
                  {...register("rating", { required: true })}
                  placeholder="Rating Our Product/Service,Rating Number not More than 5"
                  className="p-2 m-2 w-100 input-field"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}
                <Button type="submit" variant="contained" style={{marginTop:5}}>Review</Button>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AddReview;
