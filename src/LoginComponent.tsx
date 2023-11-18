import React, {useState} from "react";
import './LoginComponent.css'
import TrackComponent from "./TrackComponent";
export default function LoginComponent() {
    const [loginValid, setLoginValid] = useState(false);
    return (
        <>
            <div className="introTextContainer">
                <h1 className="loginIntroText">Rastreio de Encomendas</h1>
            </div>
            <div className="loginBoxContainer">
                <div className="loginBox">
                    <div className="loginTitle">
                        <div className="textMajor">Login</div>
                    </div>
                    <div className="loginInputs">
                        <div className="loginTextInput">
                            <div className="textMinor">Usuário</div>
                            <input className="inputPassUser"/>
                        </div>
                        <div className="loginTextInput">
                            <div className="textMinor">Senha</div>
                            <input type="password" className="inputPassUser"/>
                        </div>
                        <div className="buttonContainer">
                            <button className="loginButton">Logar</button>
                        </div>
                    </div>
                </div>
            </div>
            { loginValid &&
                <>
                    <TrackComponent/>
                </>
            }
        </>
    );
}

