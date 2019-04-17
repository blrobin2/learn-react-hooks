import React, { useState, useEffect } from 'react';

// function useMedium() {
//   const URI = "http://google.com";
//   return useEffect(() => {
//     fetch(URI)
//       .then(console.log)
//       .catch(console.error)
//   })
// }

export default function CounterHooks(): JSX.Element {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());

    // useMedium();

    useEffect((): void => {
        console.log('useEffect as component did mount')
    }, []);

    useEffect((): void => {
        console.log('useEffect as component did update')
    }, [count]);

    useEffect((): () => void => {
        const clicked = (): void => console.log('window clicked');
        window.addEventListener('click', clicked);

        return (): void => {
            window.removeEventListener('click', clicked)
        }
    }, []);

    const handleClick = (): void => {
        setCount((count: number): number => count + 1);
        setTime(new Date());
    };

    return (
        <div>
            <h3 className="center">
            Welcome to the Counter of Life
            </h3>
            <button
                className="center-block"
                onClick={handleClick}>
                {count}
            </button>
            <p className="center">
            at: {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}
            </p>
        </div>
    );
}
