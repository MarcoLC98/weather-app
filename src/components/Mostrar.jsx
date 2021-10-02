import react from "react";

const Mostrar = (props) => {

     return (
       <div>
         <p>Pais {props.clima.pais}</p>
         <p>Ciudad: {props.clima.ciudad}</p>
         <p>Temperatura: {props.clima.temperatura}</p>
         <p>Maxima: {props.clima.min}</p>
         <p>Minima: {props.clima.max}</p>
         <p>Sensacion Termica: {props.clima.sensacion_term}</p>
         <p>Humedad: {props.clima.humedad}</p>
       </div>
     );
 }
  
 export default Mostrar;