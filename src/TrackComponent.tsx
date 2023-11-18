import React from "react";
import './TrackComponent.css'
export default function TrackComponent() {
    let queryResult;
  return (
      <>
          <div className="trackBoxContainer">
              <div className="trackBox">
                  <div className="trackTitle">
                      <div className="textMajor">Rastreio</div>
                  </div>
                  <div className="trackInputs">
                      <div className="trackTextInput">
                          <div className="textMinor">Código</div>
                          <input className="inputPassUser"/>
                          <div className="trackButtonContainer">
                              <button className="trackButton">Cadastrar</button>
                          </div>
                      </div>
                  </div>
                  <div className="queryResultsContainer">

                  </div>
              </div>
          </div>
      </>
  );
}