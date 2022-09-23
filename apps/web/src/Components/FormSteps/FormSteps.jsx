import React, {  useState, useReducer } from 'react'
import { Formik, Form, Field, FormikConfig, FormikValues  } from 'formik'
import Contrato from './Contrato';
import Stepper from './Stepper';
import Contacto from './Contacto';
import Propiedad from './Propiedad';


export const FormContext = React.createContext();

const initialState = {
    steps: ["Ingresa tus datos", "Hablemos de números", "Domicilio"],
    step: 1
}

const reducer = (state, action) => {
    switch (action.type){
        case "next":
            return { ...state, step: state.step + 1 }
        case "prev":
            return { ...state, step: state.step - 1 }
        default:
            return state;
    }
}

export default function FormSteps(){
    const [ state, dispatch ] = useReducer(reducer, initialState)
    const initialValues = {
        terminos: '',
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        celular: '',
        correo: '',
        cp: '',
        colonia: '',
        tipoPropiedad: '',
        m2: '',
        m2Construccion: '',
        antiguedad: '',
        comentario: ''
    }
    const submitHandler = (values, onSubmitProp) =>{
        console.log("enviado")
    }
    return(
        <>
            <div className='row'>
                <h4>Quiero vender mi propiedad</h4>
            </div>
            <div className='row'>
                <span>Llena el siguiente formulario con tu información y en breve un agente inmobiliario te contactará.</span>
            </div>
            <div className='row'>
                <FormContext.Provider value={{ state: state, dispatch: dispatch}} >
                    <Formik
                        initialValues={initialValues}
                        onSubmit={submitHandler}
                    >
                        {(formik) => {
                            return(
                                <Form autoComplete='off'>
                                    {state.step === 1 ? <Contrato /> : null}
                                    {state.step === 2 ? <Contacto /> : null}
                                    {state.step === 3 ? <Propiedad /> : null}
                                    <Stepper />
                                </Form>
                            )
                        }}
                    </Formik>
                </FormContext.Provider>
            </div>
        </>
    )
}