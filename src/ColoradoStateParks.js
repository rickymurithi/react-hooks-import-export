import React from "react";
import HowManyParks from "./parks/HowManyParks";
import MesaVerde from "./parks/MesaVerde";
import { Trees } from "./parks/RockyMountain";
import { Wildlife } from "./parks/RockyMountain";


function ColoradoStateParks() {
  HowManyParks(); // => "42 parks!"

  return (
    <div className="ColoradoStateParks">
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      <Trees />
      <Wildlife />
  </div>
  );
}
export default ColoradoStateParks;