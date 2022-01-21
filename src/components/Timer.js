import { useState, useEffect } from 'react';
const Timer = (props) => {
    // Helper code for round timer 
    var [countdown, updateCount] = useState(60);
    const tick = () => {
        if (countdown > 0) {
            updateCount(countdown - 1);
        }
        else {
            updateCount(60);
        }
    }
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });




    // code for round timer ends

    return(
        <div id="countdown" className='m-2'>
            <div id="countdown-number">{countdown}</div>
            <svg>
                <circle r="18" cx="20" cy="20"></circle>
            </svg>
        </div>
    );
        
    
}

export default Timer;