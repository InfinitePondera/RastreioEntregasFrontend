import React from "react";
import './InfoComponent.css';
export default function() {
    return (
        <>
            <div className="tabButtonsContainerContainer">
                <div className="tabButtonsContainer">
                    <button className="tabButton">Rastreio</button>
                    <button disabled className="tabButton tabButtonSelected">Infos</button>
                </div>
            </div>
            <div className="trackBoxContainer">
                <div className="trackBox">
                    <div className="trackTitle">
                        <div className="textMajor">Informações</div>
                    </div>
                    <div className="nameContainer">
                        <div className="textMinor">Nome Placeholder</div>
                    </div>
                    <div className="trackInputs">
                        <div className="trackTextInput">
                            <input className="inputPassUser"/>
                            <div className="trackButtonContainer">
                                <button className="trackButton">Mudar</button>
                            </div>
                        </div>
                    </div>
                    <div className="adminOptionsContainer">
                        <div className="textMinor">Intervalo do rastreio:</div>
                        <select  name="selectedInterval">
                            <option value="5min">5 minutos</option>
                            <option value="10min">10 minutos</option>
                            <option value="15min">15 minutos</option>
                            <option value="30min">30 minutos</option>
                            <option value="1h">1 hora</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}