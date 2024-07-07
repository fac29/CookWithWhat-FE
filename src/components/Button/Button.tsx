//import React from "react";
import { btnProps } from "../../Utils/TypeBucket";

export default function Button({
    btnText,
    btnonClick,
    btnclassName,
}: btnProps) {
    return (
        <button className={btnclassName} onClick={btnonClick} type="submit">
            {btnText}
        </button>
    );
}
