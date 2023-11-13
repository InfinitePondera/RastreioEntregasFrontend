import React from "react";

export default function ResultLocationComponent() {
    return (
        <>
            <div className="resultLocationContainer">
                <div className="locationDot" />
                <div className="locationInfo" ></div>
            </div>
        </>
    );
}
//usar o objeto que retorna da consulta do rastreio pra preencher as informacoes nesse componente na div locationInfo (localo, horario, status, etc.)