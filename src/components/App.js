import React, { Component, useState } from "react";
import '../styles/App.css';
import  Heading from "./Heading";
import InputQuery from './InputQuery';
import Subheading from "./SubHeading";
import Button from "./SubmitButton";
const App = () => {
  return (
    <div id="main">
      <Heading/>
      <Subheading/>
      <InputQuery/>
      <Button/>
    </div>
  )
}


