import React, { useEffect, useState } from 'react'
import Tabla from './Tabla'
import { obtenerTodos } from '../../services/InventarioService';
import Modal from './Modal';

export default function Inventario() {

  const [inventarios, setInventarios] = useState([]);
  const [inventario, setInventario] = useState({
    serial: "",
    modelo: "",
    descripcion: "",
    foto: null,
    color: "",
    fechaCompra: "",
    precio: "",
    usuario: "",
    marca: "",
    estado: "",
    tipoEquipo: ""
  });
  

  useEffect( () => {
    const getInventarios = () => {
        obtenerTodos()
        .then(r => {
            console.log(r);
            setInventarios(r.data)
        }).catch(e => {
            console.log(e)
        })
    }
    getInventarios();
  }, []);

  const changeInventario = e => {
    e.preventDefault();
    setInventario({
      ...inventario,
      [e.target.name]: e.target.value 
    })
  }

  return (
    <div className='container'>
      <button 
        type="button" 
        className="btn btn-outline-primary"
        data-bs-toggle="modal" 
        data-bs-target="#modalInventarios"
      >
        <i className="fa-solid fa-plus"></i>
        Agregar
      </button>
      <Tabla 
        inventarios={inventarios}
      />
      <Modal 
        inventario={inventario}
        changeInventario={changeInventario}
      />
    </div>
  )
}
