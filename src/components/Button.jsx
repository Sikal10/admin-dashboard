import React from 'react';

const Button = ({bgColor, color, text, size, borderRadius}) => {
    return (
        <button className={`text-${size} p-3 hover:drop-shadow-xl`} style={{background: bgColor, color, borderRadius}}>
            Download
        </button>
    );
};

export default Button;