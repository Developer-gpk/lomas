import React, { useContext } from 'react'
import { FormContext } from './Form'

export default function StepperControl(props){
    const context = useContext(FormContext)
    return(
        <div className='container-fluid stepControl'>
            <div className='row'>
                <div className='col-2 col-md-2'>
                    {context.state.step === 1 ? null : (
                        <a
                            type='button'
                            className='action'
                            onClick={() => context.dispatch({ type: "prev" })}
                            disabled={context.state.step === 1}
                        >
                        Atras
                        </a>
                    )} 
                </div>
                <div className='col-8 col-md-8'>

                </div>
                <div className='col-2 col-md-2'>
                    {context.state.step === 3 ? (
                        <a className='submit' type="submit">
                            Enviar
                        </a>
                    ):(
                        <a className='action' type='button' onClick={() => context.dispatch({ type: "next" })}>
                            Siguiente
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}