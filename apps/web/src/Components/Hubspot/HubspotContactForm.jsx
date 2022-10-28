import React, { useEffect } from 'react'
import { useHubspotForm } from 'next-hubspot';

export default function HubspotContactForm({ region, portalId, formId }){
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: portalId,
        formId: formId,
        target: '#hubspotForm'
    });
    /*useEffect(() =>{
        const script = document.createElement('script');
        script.src='//js.hsforms.net/forms/embed/v2.js';
        document.body.appendChild(script);
        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    region: {region},
                    portalId: {portalId},
                    formId: {formId},
                    target: '#hubspotForm'
                })
            }
        });
    })*/
    return(
            <div id='hubspotForm'></div>
    )
}