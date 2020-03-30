import React from "react";

type Props = {
    // onClick: (e: React.MouseEvent) => void; // Basic mouse event
    // onChange?: (e: React.FormEvent<HTMLInputElement>) => void; Basic input event
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// Use React.FC when dealing with children
export const Button: React.FC<Props> = ({ onClick, children }) => {
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
};
