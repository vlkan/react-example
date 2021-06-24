import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import {  Button } from "semantic-ui-react";
import VTextInput from "../utilities/customFormControls/VTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  const schema = Yup.object({
    productName: Yup.string().required("Name required"),
    unitPrice: Yup.number().required("Price required"),
  }); //validation

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <VTextInput name="productName" placeholder="Product Name" />
          <VTextInput name="unitPrice" placeholder="Product Price" />
          <Button color="green" type="submit">
            Add Product
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
