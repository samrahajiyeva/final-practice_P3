import React from 'react'
import './Add.scss'
import Helmet from 'react-helmet'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Toaster , toast } from 'react-hot-toast'

function Add() {
  return (
    <>
    <Helmet>
      <title>Add</title>
    </Helmet>
    <div className="form">
    <Formik initialValues={{
      content: "",
      price: 0
    }}
    //validation Schema
    validationSchema = {Yup.object({
      content: Yup.string().required("content is required!"),
      price: Yup.number().required("price is required!")
    })}

    //on Submit
    onSubmit = {(values , {resetForm}) => {
      axios.post("http://localhost:4444/cards" , values).then(res => {
        toast.success("card added")
      })
      resetForm()
    }}
    >
      {
        ({values , handleSubmit , handleChange , dirty}) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="content">Content</label>
            <input type="text" placeholder='content' id='content' value={values.content} onChange={handleChange}/>
            <label htmlFor="price">Price</label>
            <input type="number" placeholder='price' id='price' value={values.price} onChange={handleChange}/>

            <button type='submit' disabled={!dirty}>Add</button>
          </form>
        )
      }
    </Formik>
    </div>
    <Toaster />
    </>
  )
}

export default Add