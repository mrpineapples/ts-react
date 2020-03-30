import React from "react";

type Props = {
    // onClick: (e: React.MouseEvent) => void; // Basic mouse event
    // onChange?: (e: React.FormEvent<HTMLInputElement>) => void; Basic input event
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ onClick }: Props) => {
    return (
        <button type="button" onClick={onClick}>
            Click Me
        </button>
    );
};
