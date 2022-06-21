import React, { useEffect, useState } from 'react'
import { obtenerTodos, guardar, editarPorId } from '../../services/EstadoService';
import TablaModulos from '../iu/TablaModulos';
import Modal from './Modal';

export default function Estado() {

  const [estados, setEstados] = useState([]);
  const [estado, setEstado] = useState({
    _id: '',
    nombre: '',
    estado: true
  });
  const [error, setError] = useState(false);
  const [hidden] = useState('hidden');
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    const getEstados = () => {
        obtenerTodos()
        .then(r => {
            console.log(r);
            setEstados(r.data)
        }).catch(e => {
            console.log(e)
        })
    }
    getEstados();
  }, []);

  const changeEstado = e => {
    e.preventDefault();
    setEstado({
      ...estado,
      [e.target.name]: e.target.value 
    })
  }

  const add = e => {
    setLoading(true);
    e.preventDefault();
    console.log(estado);
    if(estado._id){
      editarEstado();
    }else{
      guardarEstado();
    }
    resetEstado();
  }

  const guardarEstado = () => {
    guardar(estado)
    .then(r => {
      setEstados([...estados, r.data]);
      changeError(false)
      setLoading(false);
    }).catch(e => {
      console.log(e);
      changeError(true);
      setLoading(false);
    })
  }

  const closeModal = () => {
    resetEstado()
    changeError(false)
  }

  const changeError = e => {
    setError(e);
  }

  const openEditById = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const id = e.target.getAttribute('data');
      console.log(id)
      const estadoFilter = estados.filter(est => est._id == id)[0];
      setEstado({
        ...estadoFilter
      });
    }, 500)
  }

  const editarEstado = () => {
    editarPorId(estado._id, estado)
    .then(r => {
      console.log(r.data._id)
      const id = r.data._id;
      if(!r.data.estado){
        const activos = estados.filter(est => est._id !== id);
        setEstados(activos);
      }
      changeError(false)
      setLoading(false);
    }).catch(e => {
      console.log(e);
      changeError(true);
      setLoading(false);
    })
  }

  const resetEstado = () => {
    setEstado({
      _id: '',
      nombre: '',
      estado: true
    })
  }

  return (
    <div className='container'>
      <button 
        onClick={resetEstado}
        type="button" 
        className="btn btn-outline-primary"
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
      >
        <i className="fa-solid fa-plus"></i>
        Agregar
      </button>
      <TablaModulos 
        componentes={estados}
        openEditById={openEditById}
      />
      <Modal 
        estado={estado}
        loading={loading}
        closeModal={closeModal}
        hidden={hidden}
        changeEstado={changeEstado}
        error={error}
        add={add}
      />
    </div>
  )
}
