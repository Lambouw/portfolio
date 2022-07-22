import React, { useContext } from "react";

import { LangContext } from "../../App";

import './Data.css';

const Data = () => {
    const { lang, toggleLang } = useContext(LangContext);

    if (lang === 'eng') {
        return (
            <div className='data-wrapper' >    
                <div className='data' >
                    <h2>Privacy Policy</h2>
                    
                    <p>Last Update: 22.07.2022<br/>
                    <strong>TLDR: </strong>For the visitors of maltelindemann.com, we don't use cookies and we don't capture personal data, except if you use the contact formular.
                    (In this case your name and your mail adress gets captured).</p>
                    
    
                    <h4>For the visitors of maltelindemann.com</h4>
                    <p>                
                        <ul>
                            <li>No personal data get captured, except you use the contact formular.</li>
                            <li>If you use the contact formular, we capture your name and your mail adress</li>
                            <li>No information get saved in the browser.</li>
                            <li>No information get passed on to advertising companies.</li>
                            <li>No information about personal or behavioral-related trends collected and evaluated.</li>
                        </ul>
                    </p>
    
                    <h4>For users of the contact formular</h4>
                    <p>
                        <ul>
                            <li>Mails get sent by an third-party provider.
                                All Mails get sent by FormSubmit. 
                                Look up the <a href='https://formsubmit.co/privacy.pdf' aria-label='FormSubmit Datenschutzrichtlinie' >FormSubmit Privacy Policy</a> for further information.</li>
                        </ul>
                    </p>
                </div>
            </div>
        );
    } else {
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
    }
};

export default Data;