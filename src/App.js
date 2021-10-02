import "./App.css";
import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";
import Mostrar from "./components/Mostrar";
//import styled from "@emotion/styled";

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <Formulario />
        </div>
      </div>
    </div>
  );
}

export default App;
