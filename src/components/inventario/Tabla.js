import React from 'react'

export default function Tabla({inventarios = []}) {
    return (
        <div className="table-responsive">
            {inventarios.length == 0 ? 'No hay datos' : (
             <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Serial</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Color</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Tipo Equipo</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    inventarios.map((inv, index) => {
                        return(
                        <tr key={inv._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{inv.serial}</td>
                            <td>{inv.modelo}</td>
                            <td>{inv.descripcion}</td>
                            <td>{inv.color}</td>
                            <td>{inv.precio}</td>
                            <td>{inv.usuario.nombre}</td>
                            <td>{inv.marca.nombre}</td>
                            <td>{inv.estado}</td>
                            <td>{inv.tipoEquipo.nombre}</td>
                            <td>
                            <button 
                                type="button" 
                                className="btn btn-outline-success"
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal"
                                data={inv._id}
                            >
                                <i className="fa-solid fa-pen-to-square" data={inv._id}
                                ></i>
                                
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-outline-danger"
                            >
                                <i className="fa-solid fa-trash"></i>
                                
                            </button>
                            </td>
                            <td></td>
                        </tr>
                        );
                    })
                    }
                </tbody>
            </table>
            )
            }
      </div>
    );
}
