import React, { useState, useRef } from "react";

export const Input = () => {
    // const [name, setName] = useState<string>(null); // explicitly state the type for value
    // const [name, setName] = useState<string | null>(null); // how to set multiple types for value

    const [name, setName] = useState(""); // type is inferred in useState.
    const ref = useRef<HTMLInputElement>(null);
    console.log("ref", ref?.current?.value);

    return (
        <input
            ref={ref}
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    );
};
