import React from 'react';

import './Data.css';

const Data = () => {
    return (
        <div className='data-wrapper' >    
            <div className='data' >
                <h2>Datenschutz</h2>
                
                <p>Letzte Änderung: 22.07.2022<br/>
                <strong>TLDR: </strong>Für die Besucher von maltelindemann.com verwenden wir keine Cookies und wir erheben keine personenbezogenen Daten, 
                es sei denn, Sie nutzen das Kontaktformular (in diesem Fall wird Ihr Name und Ihre E-Mail-Adresse erhoben).</p>
                

                <h4>Als Besucher der maltelindemann.com Webseite</h4>
                <p>                
                    <ul>
                        <li>Es werden keine persönlichen Daten erhoben, es sei denn, Sie nutzen das Kontaktformular an.</li>
                        <li>Wenn Sie das Kontaktformular nutzen, erfassen wir Ihren Namen und Ihre E-Mail-Adresse.</li>
                        <li>Es werden keine Informationen im Browser gespeichert.</li>
                        <li>Keine Informationen werden an Werbefirmen weitergegeben.</li>
                        <li>Es werden keine Informationen über persönliche und verhaltensbezogene Trends gesammelt und ausgewertet.</li>
                    </ul>
                </p>

                <h5>Als Kontaktformularnutzer</h5>
                <p>
                    <ul>
                        <li>E-Mails werden über einen Drittanbieter versendet. 
                            Alle E-Mails werden mit FormSubmit versendet. 
                            Siehe die <a href='https://formsubmit.co/privacy.pdf' aria-label='FormSubmit Datenschutzrichtlinie' >FormSubmit-Datenschutzrichtlinie</a> für weitere Informationen.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Data;