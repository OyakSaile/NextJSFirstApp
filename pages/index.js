import React, { useState } from "react";
import "./styles.css";
function ShowContador() {
  const [contador, setContador] = useState(0);

  function Add() {
    setContador(contador + 1);
  }
  function Remover() {
    setContador(contador - 1);
  }

  return (
    <div id="App">
      <h1>Contador Usando NEXTJS E React</h1>
      <p>Você Clickou {contador} Vezes</p>
      <div class="btns">
        <button onClick={Add}>Adicionar</button>
        <button onClick={Remover}>Remover</button>
      </div>
    </div>
  );
}

export default ShowContador;
