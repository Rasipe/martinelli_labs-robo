import React from 'react';
import RBFieldGroup from './shared/rb-field-group/RBFieldGroup'

import './App.css';
import { IRBFieldProps } from './shared/rb-field/RBField';

function App() {

  const defaultState = "Em Repouso";
  const head: IRBFieldProps[] = [
    {
      label: "Rotação",
      options: [
        "Rotação -90°",
        "Rotação -45°",
        "Em Repouso",
        "Rotação 45°",
        "Rotação 90°",
      ],
      defaultState
    },
    {
      label: "Inclinação",
      options: [
        "Para Cima",
        "Em Repouso",
        "Para Baixo"
      ],
      defaultState
    },
  ];

  const arm: IRBFieldProps[] = [
    {
      label: "Cotovelo",
      options: [
        "Em Repouso",
        "Levemente Contraído",
        "Contraído",
        "Fortemente Contraído"
      ],
      defaultState
    },
    {
      label: "Pulso",
      options: [
        "Rotação para -90°",
        "Rotação para -45°",
        "Em Repouso",
        "Rotação para 45°",
        "Rotação para 90°",
        "Rotação para 135°",
        "Rotação para 180°"
      ],
      defaultState
    }
  ];

  const rightArm: IRBFieldProps[] = []

  function headValidation(fields: IRBFieldProps[]) {
  }

  function armValidation(fields: IRBFieldProps[]) {

  }

  return (
    <div className="App">
      <div className="container">
        <RBFieldGroup  fields={head} title="Cabeça" validation={headValidation}></RBFieldGroup>
        <RBFieldGroup fields={arm} title="Braço Esquerdo" validation={armValidation}></RBFieldGroup>
        <RBFieldGroup fields={arm} title="Braço Direito" validation={armValidation}></RBFieldGroup>
      </div>
    </div>
  );
}

export default App;
