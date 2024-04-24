import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/navbar";
import Nosotros from "./Layout/Nosotros";
import Ima from  "../src/Componentes/Box2/Fotografia";
import Titular from "./Componentes/Box2/Presentacion";
import Introduccion from "./Componentes/Box3/Historia";
import Trabajo from "./Componentes/Box4/Productos";
import Inscripcion from "./Componentes/Box5/Footer";
import Login from "./Layout/Iniciar Sesion";
import Limpieza from './Layout/Limpieza';
import Ortodoncia from "./Layout/Ortodoncia";
import Odontopediatra from "./Layout/Odontopediatra";
import Protesis_Dental from "./Layout/ProtesisDental"



export class App extends Component {
    render() {
    return (
      <div className="App">
      <section className='"container-md'>
        
          <Routes>
            <Route path="/" element={
      <div>
      <Navbar/>
      <Ima/>
      <Titular/>
      <Introduccion/>
      <Trabajo/>
      <Inscripcion/>
      
      </div>
            }/>
      <Route path="Nosotros" element={<Nosotros />}/>
      <Route path="Login " element={<Login/>}/>
   
   <Route path="Ortodoncia" element={<Ortodoncia />}/>
   <Route path="Limpieza" element={<Limpieza/>}></Route>
   <Route path="Odontopediatra" element={<Odontopediatra/>}/>
   <Route path="Protesis_Dental" element={<Protesis_Dental/>}/>

</Routes>
         
      
      </section>

      

    </div>
    )
  }
}

export default App


