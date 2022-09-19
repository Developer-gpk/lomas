import React from 'react'
import { Field } from 'formik'

export default function NumbersData(){
    return(
        <div className='form'>
            <div className='row'>
                <h5>Hablemos de números</h5>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <Field name="valorInmueble" as="select" className="form-select">
                        <option defaultValue>Valor del inmueble que buscas*</option>
                    </Field>
                </div>
                <div className='col-12 col-md-3'>
                    <Field name="enganche" className="form-control" as="input" placeholder="" />
                </div>
                <div className='col-12 col-md-3'>
                    <Field name="ahorroMinimo" className="form-control" as="input" placeholder="" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <Field name="tipoCredito" as="select" className="form-select">
                        <option defaultValue>Tipo de crédito*</option>
                    </Field>
                </div>
                <div className='col-12 col-md-4'>
                    <Field name="plazo" as="select" className="form-select">
                        <option defaultValue>Plazo*</option>
                    </Field>
                </div>
                <div className='col-12 col-md-4'>
                    <Field name="ingresos" as="select" className="form-select">
                        <option defaultValue>Ingresos*</option>
                    </Field>
                </div>
            </div>
            <div className='row relleno'>

            </div>
        </div>
    )
}