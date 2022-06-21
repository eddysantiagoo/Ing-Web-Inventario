import React, { useEffect, useState } from 'react'
import { obtenerTodosUsuarios } from '../../services/UsuarioService';

export default function Modal({inventario, changeInventario}) {
    const [usuarios, setUsuarios] = useState([]);
    
    useEffect( () => {
        const getUsuarios = () => {
            obtenerTodosUsuarios()
            .then(r => {
                console.log(r);
                setUsuarios(r.data)
            }).catch(e => {
                console.log(e)
            })
        }
        getUsuarios();
      }, []);
  return (
<div 
    className="modal fade" id="modalInventarios" 
    tabIndex="-1" 
    aria-labelledby="exampleModalLabel" 
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Agregar Inventario</h5>
          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="modal" 
            aria-label="Close"
          >
          </button>
        </div>
            <div className="modal-body">
            <form class="needs-validation" novalidate="">
            <div class="row g-3">
                <div class="col-sm-6">
                <label for="serial" class="form-label">Serial</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="serial" 
                    placeholder=""
                    name="serial"
                    value={inventario.serial}
                    required
                    onChange={changeInventario}  
                />
                <div class="invalid-feedback">
                    Valid first name is required.
                </div>
                </div>

                <div class="col-sm-6">
                <label for="modelo" class="form-label">Modelo</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="modelo" placeholder="" 
                    required
                    name="modelo"
                    value={inventario.modelo}
                    onChange={changeInventario}  
                />
                <div class="invalid-feedback">
                    Valid last name is required.
                </div>
                </div>

                <div class="col-12">
                <label for="descripcion" class="form-label">Descripción
                <span class="text-muted">(Optional)</span>
                </label>
                <div class="input-group has-validation">
                    <textarea
                    name="descripcion"
                    class="form-control" 
                    id="descripcion" 
                    placeholder="Aquí descripción..."
                    value={inventario.descripcion}
                    onChange={changeInventario}  
                    />
                <div class="invalid-feedback">
                    Your username is required.
                    </div>
                </div>
                </div>

                <div class="col-12">
                <label for="color" class="form-label">Color <span class="text-muted">(Optional)</span></label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="color" 
                    placeholder="verde"
                    name="color"
                    value={inventario.color}
                    onChange={changeInventario}  
                />
                <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
                </div>

                <div class="col-12">
                <label for="precio" class="form-label">Precio</label>
                <input 
                    type="number" 
                    class="form-control" 
                    id="precio" 
                    name="precio"
                    placeholder="1000"
                    value={inventario.precio}
                    onChange={changeInventario}  
                />
                <div class="invalid-feedback">
                    Please enter your shipping address.
                </div>
                </div>

                <div class="col-md-5">
                <label for="usuario" class="form-label">Usuario</label>
                <select class="form-select" id="usuario" required="">
                    <option value="">Selecciona uno...</option>
                    {usuarios.map(u => {
                        return (
                            <option value={u._id}>{u.nombre}</option>
                        );
                    })}
                    
                </select>
                <div class="invalid-feedback">
                    Please select a valid country.
                </div>
                </div>

                <div class="col-md-4">
                <label for="state" class="form-label">State</label>
                <select class="form-select" id="state" required="">
                    <option value="">Choose...</option>
                    <option>California</option>
                </select>
                <div class="invalid-feedback">
                    Please provide a valid state.
                </div>
                </div>

                <div class="col-md-3">
                <label for="zip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required=""/>
                <div class="invalid-feedback">
                    Zip code required.
                </div>
                </div>
            </div>

                <hr class="my-4" />

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="same-address"/>
                    <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="save-info"/>
                    <label class="form-check-label" for="save-info">Save this information for next time</label>
                </div>

                <hr class="my-4"/>

                <h4 class="mb-3">Payment</h4>

                <div class="my-3">
                    <div class="form-check">
                    <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required=""/>
                    <label class="form-check-label" for="credit">Credit card</label>
                    </div>
                    <div class="form-check">
                    <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required=""/>
                    <label class="form-check-label" for="debit">Debit card</label>
                    </div>
                    <div class="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required=""/>
                    <label class="form-check-label" for="paypal">PayPal</label>
                    </div>
                </div>

                <div class="row gy-3">
                    <div class="col-md-6">
                    <label for="cc-name" class="form-label">Name on card</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                    <small class="text-muted">Full name as displayed on card</small>
                    <div class="invalid-feedback">
                        Name on card is required
                    </div>
                    </div>

                    <div class="col-md-6">
                    <label for="cc-number" class="form-label">Credit card number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                    <div class="invalid-feedback">
                        Credit card number is required
                    </div>
                    </div>

                    <div class="col-md-3">
                    <label for="cc-expiration" class="form-label">Expiration</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
                    <div class="invalid-feedback">
                        Expiration date required
                    </div>
                    </div>

                    <div class="col-md-3">
                    <label for="cc-cvv" class="form-label">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
                    <div class="invalid-feedback">
                        Security code required
                    </div>
                    </div>
                </div>

                <hr class="my-4"/>

                <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
            </form>
            </div>
        </div>
        </div>
    </div>
  )
}
