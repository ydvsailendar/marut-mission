import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="card fixed-bottom">
        <div className="card-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm">
                <h5 className="card-title">Marut Mission (Base for Race)</h5>
                <hr />
                <p className="card-text">
                  <b>MARUT</b>: Motivate All Retruse & Unique Talent
                </p>
                <blockquote className="quote-box">
                  <p className="quote-text">
                    " माता रून बन्द गर्नुहोस् तपाईंको अगाडि म छु । <br />
                    सुसंस्कृत,सिर्जनशील, समृद्ध संसार म बनाउँछु ।। "
                  </p>
                </blockquote>
              </div>
              <div className="col-sm">
                <h5 className="card-title">Social Links</h5>
                <hr />
                <div className="row">
                  <div className="col-sm">
                    <p className="card-text">Facebook</p>
                    <p className="card-text">Youtube</p>
                    <p className="card-text">Twitter</p>
                  </div>
                  <div className="col-sm">
                    <p className="card-text">Linkden</p>
                    <p className="card-text">Instagram</p>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <h5 className="card-title">Contact Details</h5>
                <hr />
                <p className="card-text">
                  <b>Address</b> : Marut Mission, Kathmandu-8 <br />
                  <b>Contact No.</b> : 9849612358 <br />
                  <b>Email</b>: marutmission@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          <div className="float float-right">
            @developer <b>ydvsailedar</b>
          </div>
          <div className="float float-left">
            © 2019 Copyright: <b>marut-mission</b>
          </div>
        </div>
      </div>
    </div>
  );
}
