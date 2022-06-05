import React, { useState, useEffect } from 'react'
import './onboard.css'
import { Input, Button } from 'reactstrap'

export default function Onboard() {
    const [name, setName] = useState('')

    const handleClick = () => {
        alert(name)
    }

    return (
        <div className="containerComp">
            <div className="card">
                <p className="cardText">ABC SAYFASI</p>

                <div className="inputForm">
                    <Input
                        id="hover"
                        name="username"
                        placeholder="Kullanıcı Adı"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <Input
                        id="hover"
                        style={{ "marginTop": "15px" }}
                        name="password"
                        placeholder="Şifre "
                        type="password"
                    />
                </div>
                <Button
                    className="inputBtn"
                    color="success"
                    onClick={() => handleClick()}
                    outline
                >Giriş Yap</Button>
            </div>
        </div>
    )
}
