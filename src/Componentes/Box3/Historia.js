import our from "../../assets/img/doctor.jpg";
const Introduccion =()=>{
    return(
<div className="general">
    <div className="quien">
        <h1>Quienes Somos</h1>
  
        <h3>En ZMDent contamos con más de 5 años de
experiencia, ofrenciendo una amplia gama de
servicios de odontología de primera categoría en un
ambiente acogedor y personalizado. Nuestro equipo
esta altamente capacitado y dedicado a tu bienestar.
Descubre cómo transformamos tu salud bucal en un
solo lugar, donde tu sonrisa es nuestra prioridad. </h3>
    </div>

     <div className="img-quien">
        <img src={our} alt=""/>

     </div>
</div>

)
}

export default Introduccion;