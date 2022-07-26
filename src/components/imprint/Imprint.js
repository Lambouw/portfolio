import React, { useContext } from "react";

import { LangContext } from "../../App";

import './Imprint.css';

const Imprint = () => {
    const { lang, toggleLang } = useContext(LangContext);

    if (lang === 'eng') {
        return (
            <div className='imprint-wrapper' >
                <div className='imprint' >
                    <h2>Legal Notice</h2>
    
                    <h4>Information according to § 5 TMG</h4>
                    <p>Malte Lindemann<br />
                    Loeweweg 3<br />
                    71397 Leutenbach</p>
    
                    <h4>Contact</h4>
                    <p>E-Mail: jm.lindemann@web.de</p>
    
                    <p>Source: <a href="https://www.e-recht24.de" aria-label='E-Recht24 Link' >eRecht24</a></p>
    
                    <h5>Liability for content</h5>
                    <p>As a service provider, we are responsible for our own content on these pages according to § 7, Paragraph 1 of the German Telemedia Act (TMG). 
                    According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or 
                    to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. 
                    However, liability in this regard is only possible from the point in time at which knowledge of a specific infringement of the law is known. 
                    As soon as we become aware of any violations of the law, we will remove this content immediately.</p>
    
                    <h5>Liability for links</h5>
                    <p>Our offer contains links to external third-party websites, the content of which we have no influence on.
                    Therefore we cannot assume any liability for this external content.
                    The respective provider or operator of the pages is always responsible for the content of the linked pages.
                    The linked pages were checked for possible legal violations at the time of linking.
                    Illegal content was not recognizable at the time of linking.
                    However, a permanent control of the content of the linked pages is not reasonable without concrete evidence of an infringement.
                    As soon as we become aware of legal violations, we will remove such links immediately.</p>
    
                    <h5>Copyright</h5>
                    <p>The contents of this website are subject to the german copyright. 
                    Duplication, editing, distribution and any other of utilization outside the limits of copyright requires the written consent of the respectice author or creator.
                    Downloads and copies of this page are only for private and non-commercial use permitted.
                    Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. 
                    In particular contents of third parties are marked as such. 
                    Should you nevertheless become aware of a copyright infringement, we ask for a corresponding note. 
                    As soon as we become aware of legal violations, we will remove such content immediately.</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className='imprint-wrapper' >
                <div className='imprint' >
                    <h2>Impressum</h2>
    
                    <h4>Angaben gem&auml;&szlig; &sect; 5 TMG</h4>
                    <p>Malte Lindemann<br />
                    Loeweweg 3<br />
                    71397 Leutenbach</p>
    
                    <h4>Kontakt</h4>
                    <p>E-Mail: jm.lindemann@web.de</p>
    
                    <p>Quelle: <a href="https://www.e-recht24.de" aria-label='E-Recht24 Link' >eRecht24</a></p>
    
                    <h5>Haftung für Inhalte</h5>
                    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                    Nach §§ 8 bis 10 TMG sind wir als Dienste Anbieter jedoch nicht verpflichtet, 
                    übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. 
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
                    Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
                    Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
    
                    <h5>Haftung für Links</h5>
                    <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                    Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
                    Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
    
                    <h5>Urheberrecht</h5>
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, 
                    nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
                    Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                    bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                </div>
            </div>
        );
    }
};

export default Imprint;