import React from 'react'
import { Field } from 'formik'

export default function PersonalData(){
    return(
        <div className='form'>
            <div className='row'>
                <h5>Ingresa tus datos</h5>
            </div>
            <div className='row'>
                <div className='col-12 col-md-5'>
                    <Field name="nombre" className="form-control" as="input" placeholder="Nombre(s)*" />
                </div>
                <div className='col-12 col-md-7'>
                    <Field name="apellidos" className="form-control" as="input" placeholder="Apellidos*" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-5'>
                    <Field type="date" name="nacimiento" className="form-control" placeholder="Fecha de nacimiento*" />
                </div>
                <div className='col-12 col-md-7'>
                    <Field name="celular" className="form-control" as="input" placeholder="Numero celular*" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Field type="email" name="correo" className="form-control" as="input" placeholder="Correo electronico*" />
                </div>
            </div>
        </div>
    )
}