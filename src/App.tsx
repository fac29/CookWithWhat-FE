//import React from "react";
import Button from "./components/Button/Button";
//import './App.css';

export default function App() {
    return (
        <>
            <div>
                <Button
                    btnText="hello"
                    btnonClick={() => console.log("hello")}
                    btnclassName="color-red bg-cprimary py-[8px] px-[16px] border-2 border-black rounded-[8px]"
                />
            </div>
        </>
    );
}
