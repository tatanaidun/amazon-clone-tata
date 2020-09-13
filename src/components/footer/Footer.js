import React, { useState, useEffect } from "react";
import "./Footer.css";

const footerObject = {
  ["Get to Know Us"]: [
    "Careers",
    "Blog",
    "About Amazon",
    "Investor Relations",
    "Amazon Devices",
    "Amazon Tours",
  ],
  ["Make Money with Us"]: [
    "Sell on Amazon",
    "Sell on Amazon Business",
    "Sell your Apps on Amazon",
    "Become an Affiliate",
    "Advertise your products",
    "Self-Publish with Us",
  ],
  ["Amazon Payment Products"]: [
    "Amazon Business Card",
    "Shop with Points",
    "Reload Your Balance",
    "Amazon Currency Converter",
  ],
  ["Let Us Help You"]: [
    "Amazon and COVID-19",
    "Your Account",
    "Shipping Rates and Policies",
    "Reutrn & Replacements",
    "Amazon Assistant",
    "Help",
  ],
};

function Footer() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div>
      {show && (
        <a href="#">
          <div class="footer_navFooter">Back to top</div>
        </a>
      )}
      <div className="footer">
        {Object.keys(footerObject).map((header) => (
          <div className="footer_blocks">
            <h4 className="footer_block_header">{header}</h4>
            {footerObject[header].map((sideheader) => (
              <p>{sideheader}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
