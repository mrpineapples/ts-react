import React, { useRef, useContext } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { GlobalContext } from "../GlobalContext";

export const ReducerButtons = () => {
    const ref = useRef<HTMLDivElement>(null!);
    const { rValue, turnOn, turnOff } = useContext(GlobalContext);

    useClickOutside(ref, () => {
        console.log("clicked outside");
    });

    return (
        <div ref={ref}>
            {rValue && <h1>Visible</h1>}
            <button type="button" onClick={turnOn}>
                Action One
            </button>
            <button type="button" onClick={turnOff}>
                Action Two
            </button>
        </div>
    );
};
