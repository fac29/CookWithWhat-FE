import React from "react";
import Button from "./components/Button/Button";
//import './App.css';

export default function App() {
    return (
        <>
            <div>
                <Button
                    btnText="hello"
                    btnonClick={() => console.log("hello")}
                    btnclassName="btnPrimary"
                />
            </div>
        </>
    );
}
