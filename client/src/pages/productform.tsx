import React from "react";
import axios from "axios";
import { useState } from "react";

const ProductForm = () => {
  return (<div className="container bg-blue-200">
    <div>
      <h1>Crea un producto</h1>
    </div>
    <div>
      <label>Nombre: </label>
      <input type="text"   />
    </div>
    <div>
      <label>Marca: </label>
      <input type="text" />
    </div>
    <div>
      <label>Categoría</label>
      <input type="text" />
    </div>
    <div>
      <label>Descripción: </label>
      <input type="text" />
    </div>
    <div>
      <label>Precio</label>
      <input type="number" />
    </div>
    <div>
      <label>Seleccione las imagenes:</label>
      <input type="file" />
    </div>
    <div>
      <label>Existencias: </label>
      <input type="number" />
    </div>
  </div>
  );
};

export default ProductForm;