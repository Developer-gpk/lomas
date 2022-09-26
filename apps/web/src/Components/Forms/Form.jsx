import React, {  useState, useReducer } from 'react'
import { Formik, Form, Field, FormikConfig, FormikValues  } from 'formik'
import PersonalData from './PersonalData';
import StepperControl from './StepControl';
import NumbersData from './NumbersData';
import DomicilioData from './DomicilioData';

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

export default function Forms(){
    const [ state, dispatch ] = useReducer(reducer, initialState)
    const initialValues = {
        nombre: '',
        apellidos: '',
        nacimiento: '',
        celular: '',
        correo: '',
        valorInmueble: '',
        enganche: '',
        ahorroMinimo: '',
        tipoCredito: '',
        plazo: '',
        ingresos: '',
        cp: '',
        colonia: '',
        municipio: '',
        ciudad: '',
        estado: ''
    }
    const submitHandler = (values, onSubmitProp) =>{
        console.log(values)
    }
    const [page, setPage] = useState(0);
    return(
        <>
            <FormContext.Provider value={{ state: state, dispatch: dispatch}} >
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values, { setSubmitting }) =>{
                        console.log(values)
                        await setTimeout(() =>{
                          setSubmitting(true)
                        }, 5000)
                        setSubmitting(false)
                    }}
                >
                    {(formik) => {
                        return(
                            <Form autoComplete='off'>
                                {!formik.isSubmitting ? (
                                    <div>
                                        {state.step === 1 ? <PersonalData /> : null}
                                        {state.step === 2 ? <NumbersData /> : null}
                                        {state.step === 3 ? <DomicilioData /> : null}
                                        <StepperControl />
                                    </div>
                                ): (
                                    <div>
                                        Enviando
                                    </div>
                                )}
                            </Form>
                        )
                    }}
                </Formik>
            </FormContext.Provider>
        </>
    )
}