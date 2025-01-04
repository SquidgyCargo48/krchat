import { useState } from "react";
import "./Login.less"
import { TextInput } from "../TextInput/TextInput";
import { chatService } from "../Dto/ChatService";
import { IconButton } from "../IconButton/IconButton";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [register, setRegister] = useState(false);


    function loginRegister() {
        if (register) chatService.send({ type: "register", email, password, displayName, staySignedIn: true });
        else chatService.send({ type: "login", email, password, staySignedIn: true });
    }

    return (
        <div className="Login">
            <span className="logo" onClick={_ => {
                document.documentElement.classList.toggle("theme-light");
                const localVar = localStorage["theme"] ? "" : "light";
                localStorage["theme"] = localVar;
            }}>🗪</span>
            <TextInput type="email" placeholder="Email (someone@example.com)" value={email} onChange={setEmail} onEnter={loginRegister} />
            <TextInput type="password" placeholder="Password" value={password} onChange={setPassword} onEnter={loginRegister} />
            {register && <TextInput type="text" placeholder="Display Name (Agent Smith)" value={displayName} onChange={setDisplayName} />}
            <IconButton onClick={loginRegister} iconName="login" buttonContent={register ? "Register" : "Login"} />

            <p>
                {register ? "Switch back to: " : "Have no account yet? Go and "}

                <a href="" onClick={e => {
                    e.preventDefault();
                    setRegister(!register);
                }}>
                    {register ? "Login" : "Register"}
                </a>
            </p>
        </div>
    );
}