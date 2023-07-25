//import React from "react";
//import logo from './logo.svg';
//import './App.css';
import FunctionalComp  from "./Components/FunctionalComp";
import {ClassComp,ClassComp1} from "./Components/ClassComp";
import { Click } from "./Components/Click";
import { Increment } from "./Components/Increment";
import ParentComp from "./Components/ParentComp";

function App() {
  return <div>
    <h1>Hi Welcome Js</h1><h1>Mutilples elements shuould enclosed uder Div element.</h1>
    <FunctionalComp/>
    <ClassComp/>
    <ClassComp1/>
    <Click/>
    <Increment/>
    <ParentComp/>
    </div>
}

export default App;

