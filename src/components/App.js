import React, { Component, useState } from "react";
import '../styles/App.css';
import  Heading from './Heading.js';
import X from 'InputQuery.js';
import Subheading from "SubHeading.js";
import Button from "SubmitButton.js";
const App = () => {
  return (
    <div id="main">
      <Heading/>
      <Subheading/>
      <X/>
      <Button/>
    </div>
  )
}


