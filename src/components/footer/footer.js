import React from "react";

import './footer.css';

export default class Footer extends React.Component{

    render(){
        return(
            <footer className="footerCont">
                <div className="footerCopy">
                    <label className="footerText"><span className="footerTextDetail">One</span>der Solutions &copy; </label>
                </div>
                <div className="footerDivider"></div>
                <div className="footerSocial">
                    <div className="footerSocialLink">Twitter</div>
                    <div className="footerSocialLink">Instagram</div>
                    <div className="footerSocialLink">Facebook</div>
                    <div className="footerSocialLink">Youtube</div>
                </div>
            </footer>
        )
    }
}