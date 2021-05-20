import "./App.css";
import React, { useState } from "react";
// import Frame from "./components/Frame";
function App() {
  // inicializo la cadena de datos
  const [data, setData] = useState("");
  // inicializo los números  funciones a utilizar
  const numbers = [];
  // con forEach recorro el array
  // con el push agrego elementos al final de una matriz, devolviendo una nueva longintud
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].forEach((item) => {
    numbers.push(
      <button
        onClick={(e) => {
          // enviamos los valores a la cadena de datos
          setData(data + e.target.value);
          console.log(e.target.value);
        }}
        value={item}
      >
        {item}
      </button>
    );
  });
  return (
    <div className="wrapper">
      {/* muestra los datos que vaya enviando o el resultado en caso de calcularlo */}
      <div className="unit-wrapper">
        <div>
          <h2>Result</h2>
          <div className="show-input">{data}</div>
        </div>
        {/* muestra los botones  */}
        <div className="wrapper-special">
          <div className="digits ">{numbers}</div>
          <div className="digits">
            <button
              id="operator"
              onClick={() => setData(data.substr(0, data.length - 1))} // va quitando el último elemento agregado a la lista
            >
              clear
            </button>
            {/* envia una cadena vacía, lo que permite borrar la pantalla */}
            <button id="operator" onClick={() => setData("")}>
              Clear All
            </button>
            <button
              id="operator"
              onClick={(e) => setData(data + e.target.value)}
              value="."
            >
              .
            </button>
            <button
              id="operator"
              onClick={(e) => setData(data + e.target.value)}
              value="+"
            >
              +
            </button>
            <button
              id="operator"
              onClick={(e) => setData(data + e.target.value)}
              value="-"
            >
              -
            </button>
            <button
              id="operator"
              onClick={(e) => setData(data + e.target.value)}
              value="*"
            >
              *
            </button>
            <button
              id="operator"
              onClick={(e) => setData(data + e.target.value)}
              value="/"
            >
              /
            </button>
          </div>
          <div className="digits">
            <button
              id="operator"
              className="btn-result"
              onClick={() => {
                try {
                  setData(
                    // la funcion eval evalua el código js representado como una cadena, ejecutando operaciones matemáticas
                    // no es recomendado utilizar
                    String(eval(data)).length > 3 &&
                      String(eval(data)).includes(".")
                      ? // ? -> si el método incluye un punto, imprima con dos dígitos después de la coma .toFixed ---> da dos números después de la com
                        String(eval(data).toFixed(2)) //
                      : // caso contrario solo imprima el string
                        String(eval(data))
                  );
                  console.log(data);
                } catch (e) {
                  console.log(e);
                }
              }}
              value="="
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
