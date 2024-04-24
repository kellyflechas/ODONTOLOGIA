import f1 from "../../assets/img/orto.png";
import f2 from "../../assets/img/limpieza.jpg";
import f3 from "../../assets/img/1.png";
import f4 from "../../assets/img/2.png";
import { Button } from "react-bootstrap";

const Trabajo =()=>{
    return(
        <div className="circulo">
            <h1>Servicios</h1>
            <div className="efes">
            <Button variant="info">Ortodoncia</Button>{' '}
  <div className="f1">
    <img src={f1} alt=""/></div>

    <Button variant="info">Limpieza Dental</Button>{' '}

   <div className="f2">
    <img src={f2} alt=""/></div>

    <Button variant="info">Odontopediatria</Button>{' '}

   <div className="f3">
    <img src={f3} alt=""/></div>

    <Button variant="info">Protesis Dental</Button>{' '}

   <div className="f4">
    <img src={f4} alt=""/></div>
            </div>

    
        </div>
    )
}

export default Trabajo;