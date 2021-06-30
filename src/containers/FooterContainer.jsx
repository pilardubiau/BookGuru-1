import React from "react";
import "../styles/Footer.css";

const FooterContainer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row" />
        <div className="col-sm-3">
          <br />
          BOOKS <br />
          _______________________
          <br />
          <br />  
          <br />
         
        </div>
        <div className="col-sm-3">
          <br />
          CUSTOMER SERVICES <br />
          _______________________
          <br />
          <br />
          Contact Us <br /> Phone: 111111
          <br /> bookguru@books.com
        </div>
        <div className="col-sm-3">
          <br />
          SUSCRIPTIONS <br />
          _______________________
          <br />
          <br />
         
          BookGuru subscription <br /> My subscription
        </div>
        <div className="col-sm-3">
          <br />
          FOLLOW US <br />
          _______________________
          <br />
          <br />
      
          Twitter <br /> Pinterest
          <br /> Instagram
          <br />
          <div id="copywright" className="copyright">Copywright &copy; BookGuru</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
