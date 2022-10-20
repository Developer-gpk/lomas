import React, {  useState, useReducer } from 'react'
import { Formik, Form, Field, FormikConfig, FormikValues  } from 'formik'
import PersonalData from './PersonalData';
import StepperControl from './StepControl';
import NumbersData from './NumbersData';
import DomicilioData from './DomicilioData';
import * as Yup from 'yup'

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
    const validation = Yup.object().shape({
        nombre: Yup.string().required(),
        apellidos: Yup.string().required(),
        nacimiento: Yup.string().required(),
        celular: Yup.string().min(10).max(10).required(),
        correo: Yup.string().email().required(),
        valorInmueble: Yup.mixed().required(),
        enganche: Yup.string().required(),
        ahorroMinimo: Yup.string().required(),
        tipoCredito: Yup.mixed().required(),
        plazo: Yup.mixed().required(),
        ingresos: Yup.mixed().required(),
        cp: Yup.string().required(),
        colonia: Yup.string().required(),
        municipio: Yup.string().required(),
        ciudad: Yup.string().required(),
        estado: Yup.string().required()
    })
    const submitHandler = (values, onSubmitProp) =>{
        console.log(values)
    }
    const [page, setPage] = useState(0);
    return(
        <>
            <FormContext.Provider value={{ state: state, dispatch: dispatch}} >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validation}
                    onSubmit={async (values, { setSubmitting }) =>{
                        console.log(values)
                        await setTimeout(() =>{
                          setSubmitting(true)
                        }, 5000)
                        setSubmitting(false)
                    }}
                >
                    {({isSubmitting, errors, touched}) => {
                        return(
                            <Form autoComplete='off'>
                                {!isSubmitting ? (
                                    <div>
                                        {state.step === 1 ? <PersonalData errors={errors} touched={touched} /> : null}
                                        {state.step === 2 ? <NumbersData errors={errors} touched={touched} /> : null}
                                        {state.step === 3 ? <DomicilioData errors={errors} touched={touched} /> : null}
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