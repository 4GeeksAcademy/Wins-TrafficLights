import React, { useState } from "react";


const Lights = () => {
    const [ color, setColor ] = useState("red");

    return (
        <div className="traffic-lights">
            <div 
                onClick={() => setColor('red')}
                className={"rounded-circle lights red" + (color === 'red' ? " glow":"")}
            >
                Stop
            </div>
            <div 
                onClick={() => setColor('yellow')}
                className={"rounded-circle lights yellow" + (color === 'yellow' ? " glow":"")}
            >
                Slow Down
            </div>
            <div 
                onClick={() => setColor('green')}
                className={"rounded-circle lights green" + (color === 'green' ? " glow":"")}
            >
                GOOOOO!
            </div>
        </div>
    )
};

export default Lights;