import React, { useState } from "react";
import Mostrar from "./Mostrar";

const Formulario = () => {

  const [validacion, set_validacion] = useState(false);

  const [err_msg, set_err_msg] = useState(false);

  const [weather_data, set_weather_data] = useState({
    ciudad: "",
    pais: "",
    temperatura: "",
    min: "",
    max: "",
    sensensacion_term: "",
    humedad: "",
  });

  const [valores, set_valores] = useState({
    ciudad: "",
    pais: "",
  });

  const guardar_input = (e) => {
    set_valores({
      ...valores,
      [e.target.name]: e.target.value,
    });
    console.log(valores.ciudad);
    console.log(valores.pais);
  };
  const llamar_api = (e) => {
    e.preventDefault();
    if (valores.ciudad === "" || valores.pais === "") {
      set_validacion(false);
      set_err_msg(true);
    } else {
      const ConsultarApi = async () => {
        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${valores.ciudad},${valores.pais}&appid=addd758c18b6f2caf86ba10be78bfa12&units=metric`;
        const request = await fetch(api_url);
        const api = await request.json();

        set_weather_data({
          ciudad: api.name,
          pais: api.sys.country,
          temperatura: api.main.temp,
          min: api.main.temp_min,
          max: api.main.temp_max,
          sensensacion_term: api.main.feels_like,
          humedad: api.main.humidity,
        });
      };
      ConsultarApi();
      set_validacion(true);
      set_err_msg(false);
    }
  };

  return (
    <>
      <div className="card card-body">
        <h1 className="title">Buscador de Clima</h1>
        <form action="" onSubmit={llamar_api}>
          <div className="form-group">
            <div>
              <label>Ciudad: </label> <br />
              <div>
                <input
                  type="text"
                  name="ciudad"
                  placeholder="Ciudad"
                  className="form-control"
                  autoFocus
                  onChange={guardar_input}
                />
              </div>
            </div>
            <div>
              <label>País: </label> <br />
              <div>
                <input
                  type="text"
                  name="pais"
                  placeholder="Pais"
                  className="form-control"
                  onChange={guardar_input}
                />
              </div>
              <div className="boton-center">
                <button type="submit">Buscar</button>
              </div>
              <div>
                {err_msg ? (
                  <p className="alert alert-danger">"Ingrese ciudad y pais"</p>
                ) : null}
              </div>
              <div>{validacion ? <Mostrar clima={weather_data} /> : null}</div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
