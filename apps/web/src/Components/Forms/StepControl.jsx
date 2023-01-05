import React, { useContext } from 'react'
import Image from 'next/image'
import { FormContext } from './Form'
import { Arrow1, ArrowSend } from 'ui/constants'

export default function StepperControl(props){
    const context = useContext(FormContext)
    const gaFooter = function(category, action, label) {
        if ("function" === typeof gtag
            && "string" === typeof category
            && "string" === typeof action) {
            var object = {
                "event_action": action,
                "event_label" : label || ''
            };

            // Send to Google Analytics.
            gtag('event', category, object);

            // Print in console.
            if ("console" in window) {
                console.log(
                    'ga: [category: %s, action: %s, label: %s]',
                    category,
                    object['event_action'],
                    object['event_label']
                );
            }
        }
    }
    return(
        <div className='container-fluid stepControl'>
            <div className='row'>
                <div className='atras'>
                    {context.state.step === 1 ? null : (
                        <a
                            type='button'
                            className='action rotate'
                            onClick={() => context.dispatch({ type: "prev" })}
                            disabled={context.state.step === 1}
                        >
                         <Image src={Arrow1} alt="pin" width="13" height="12" layout={"fixed"} /> Atras
                        </a>
                    )} 
                </div>
                <div className='siguiente'>
                    {context.state.step === 3 ? (
                        <button className='submit' type="submit" onClick={gaFooter('Contacto', 'Enviar Formulario', '')}>
                            Enviar <Image src={ArrowSend} alt="pin" width="13" height="12" layout={"fixed"} />
                        </button>
                    ):(
                        <a className='action' type='button' onClick={() => context.dispatch({ type: "next" })}>
                            Siguiente <Image src={Arrow1} alt="pin" width="13" height="12" layout={"fixed"} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}