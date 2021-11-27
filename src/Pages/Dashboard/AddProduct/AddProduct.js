import { Alert, AlertTitle, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";


const AddProduct = () => {
  const [success,setSuccess] =useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://fierce-gorge-17477.herokuapp.com/addProducts", {
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
        <h1 className="mt-5 text-center text-danger">Add a Product</h1>
        <div className=" w-25 m-auto mt-5">
        {
          success && <Alert severity="success">
          <AlertTitle>Product Added Successfully...</AlertTitle>
        </Alert>
        }
          <div className=" ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("productName")}
                  placeholder="Product Name"
                  className="p-2 m-2 w-100 input-field"
                />
                <br/>

                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />
                <br/>

                <input
                  {...register("productImg", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2 w-100 input-field"
                />
                <br/>

                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />
                <br/>
                <input
                  {...register("rating", { required: true })}
                  placeholder="Rating"
                  className="p-2 m-2 w-100 input-field"
                />
                <br />
                <input
                  {...register("stock", { required: true })}
                  placeholder="Stock"
                  className="p-2 m-2 w-100 input-field"
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}
                <Button type="submit" variant="contained" style={{marginTop:5}}>Add</Button>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AddProduct;
