import React, { useReducer, useRef, useContext } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { GlobalContext } from "../GlobalContext";

const initialState = { rValue: true };

type State = {
    rValue: boolean;
};

// Making an action be two completely different types
// type Action = { type: "one" } | { type: "two" };

// Shorthand way of making a long union
// type Action =
//     | { type: "one" }
//     | { type: "two" }
//     | { type: "three" }
//     | { type: "four" };

type Action = {
    type: "one" | "two";
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "one":
            return { rValue: true };
        case "two":
            return { rValue: false };
        default:
            return state;
    }
};

export const ReducerButtons = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const ref = useRef<HTMLDivElement>(null!);
    const { rValue } = useContext(GlobalContext);

    useClickOutside(ref, () => {
        console.log("clicked outside");
    });

    return (
        <div ref={ref}>
            {rValue && <h1>Visible</h1>}
            <button type="button" onClick={() => dispatch({ type: "one" })}>
                Action One
            </button>
            <button type="button" onClick={() => dispatch({ type: "two" })}>
                Action Two
            </button>
        </div>
    );
};
