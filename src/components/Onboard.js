import React, { useState, useEffect } from 'react'
import './onboard.css'
import { Input, Button } from 'reactstrap'
import { AiOutlineLogin } from "react-icons/ai";

export default function Onboard() {
    const [userForm, setUserForm] = useState({
        name: "",
        password: ""
    })

    const handleClick = () => {
        if (userForm.name == "Yasin" & userForm.password == "Kızıltaş") {
            alert('Giriş Başarılı!')
        }
        else {
            alert('Giriş Başarısız!')
        }
    }

    return (
        <div className="containerComp">
            <div className="card">
                <p className="cardText">
                    <AiOutlineLogin size={35} />
                </p>
                <div className="inputForm">
                    <Input
                        value={userForm.name}
                        id="hover"
                        name="username"
                        placeholder="Kullanıcı Adı"
                        onChange={(name) => setUserForm({ ...userForm, name: name.target.value })}
                    />
                    <Input
                        value={userForm.password}
                        id="hover"
                        style={{ "marginTop": "15px" }}
                        name="password"
                        placeholder="Şifre "
                        type="password"
                        onChange={pass => setUserForm({ ...userForm, password: pass.target.value })}
                    />
                </div>
                <Button
                    className="inputBtn"
                    color="success"
                    onClick={() => handleClick()}
                    outline
                >Giriş Yap</Button>

                <Button
                    className="inputBtn"
                    color="success"
                    onClick={() => { }}
                    outline
                >Kayıt Ol</Button>
            </div>
        </div>
    )
}
