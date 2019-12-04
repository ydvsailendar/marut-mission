import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <div className="card text-center fixed-bottom text-muted bg-dark">
      <div className="card-body">
        <h5 className="card-title">
          <img src="icon.png" alt="Marut Mission" className="logo" />
          <b>MARUT</b>: Motivate All Retruse & Unique Talent
          <img src="icon.png" alt="Marut Mission" className="logo" />
        </h5>
        <p className="card-text">
          " माता रून बन्द गर्नुहोस् तपाईंको अगाडि म छु । <br />
          सुसंस्कृत,सिर्जनशील, समृद्ध संसार म बनाउँछु ।। "
        </p>
      </div>
      <div className="card-footer">
        <div className="float float-left">
          © 2019 Copyright: <b>marut-mission</b>
        </div>
        <div className="float float-right">
          @developer <b>ydvsailedar</b>
        </div>
      </div>
    </div>
  );
}
