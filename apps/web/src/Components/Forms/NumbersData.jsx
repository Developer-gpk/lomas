import React from 'react'
import { Field } from 'formik'

export default function NumbersData({errors, touched}){
    return(
        <div className='form'>
            <div className='row'>
                <h5>Hablemos de números</h5>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <Field name="valorInmueble" as="select" className={`form-select ${errors.valorInmueble && touched.valorInmueble ? ("isError") : null}`}>
                        <option defaultValue>Valor del inmueble que buscas*</option>
                    </Field>
                </div>
                <div className='col-12 col-md-3'>
                    <Field name="enganche" className={`form-control ${errors.enganche && touched.enganche ? ("isError") : null}`} as="input" placeholder="% enganche" />
                </div>
                <div className='col-12 col-md-3'>
                    <Field name="ahorroMinimo" className={`form-control ${errors.ahorroMinimo && touched.ahorroMinimo ? ("isError") : null}`} as="input" placeholder="Ahorro minimo" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <Field name="tipoCredito" as="select" className={`form-select ${errors.tipoCredito && touched.tipoCredito ? ("isError") : null}`}>
                        <option defaultValue>Tipo de crédito*</option>
                    </Field>
                </div>
                <div className='col-12 col-md-4'>
                    <Field name="plazo" as="select" className={`form-select ${errors.plazo && touched.plazo ? ("isError") : null}`}>
                        <option defaultValue>Plazo*</option>
                    </Field>
                </div>
                <div className='col-12 col-md-4'>
                    <Field name="ingresos" as="select" className={`form-select ${errors.ingresos && touched.ingresos ? ("isError") : null}`}>
                        <option defaultValue>Ingresos*</option>
                    </Field>
                </div>
            </div>
            <div className='row relleno'>

            </div>
        </div>
    )
}