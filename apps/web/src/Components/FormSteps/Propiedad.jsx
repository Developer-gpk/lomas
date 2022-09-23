import React from 'react'
import { Field } from 'formik'

export default function Propiedad(){
    return(
        <>
            <div className='row title'>
                <h6>Compártenos los siguientes datos para conocer más acerca de tu propiedad:</h6>
            </div>
            <div className='propiedad'>
                <div className='row mb-3'>
                    <div className='col-12 col-md-3'>
                        <Field name="cp" className="form-control" as="input" placeholder="Código postal*" />
                    </div>
                    <div className='col-12 col-md-3'>
                        <Field name="colonia" className="form-control" as="input" placeholder="Colonia*" />
                    </div>
                    <div className='col-12 col-md-6'>
                        <Field name="tipoPropiedad" as="select" className="form-select">
                            <option defaultValue>Tipo de propiedad*</option>
                        </Field>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12 col-md-3'>
                        <Field name="m2" className="form-control" as="input" placeholder="M2 de terreno*" />
                    </div>
                    <div className='col-12 col-md-3'>
                        <Field name="m2Construccion" className="form-control" as="input" placeholder="M2 de construcción*" />
                    </div>
                    <div className='col-12 col-md-6'>
                        <Field name="antiguedad" as="select" className="form-select">
                            <option defaultValue>Antigüedad de la propiedad*</option>
                        </Field>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <Field name="comentario" className="form-control" as="input" placeholder="¿Tienes algún comentario que quieras agregar?" />
                    </div>
                </div>
            </div>
        </>
    )
}