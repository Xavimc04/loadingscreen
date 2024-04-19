import { useState, useEffect } from "react";

export default function GamePercent() {
    const [progress, handleProgress] = useState(0); 

    useEffect(() => {
        var count = 0;
        var thisCount = 0;
        
        const handlers: {
            [key: string]: (data: any) => void
        } = {
            startInitFunctionOrder(data: { count: number }) {
                count = data.count;
            },
            initFunctionInvoking(data: { idx: number }) {
                handleProgress(((data.idx / count) * 100)); 
            },
            startDataFileEntries(data: { count: number }) {
                count = data.count;
            },
            performMapLoadFunction(_data: { name: string }) {
                ++thisCount;
                handleProgress(((thisCount / count) * 100)); 
            }
        };
        
        window.addEventListener('message', function (e: { data: { eventName: string }}) {
            (handlers[e.data.eventName] || function () { })(e.data);
        });
    }, []);

    return <article 
        className="border-4 border-indigo-500 text-white relative flex flex-col gap-2 justify-center px-8 h-28 w-full"
        style={{
            boxShadow: "inset 0 0 70px rgba(99, 102, 241, 0.5)"
        }}
    >
        <div 
            className="h-full bg-indigo-500 absolute left-0 -z-10"
            style={{
                width: `${ progress }%`
            }}
        ></div>

        <h2
            className="poppins text-xl"
            style={{
                textShadow: "0 0 3px rgba(0, 0, 0, 0.5)"
            }}
        >
            Cargando...
        </h2>

        <p
            style={{
                textShadow: "0 0 3px rgba(0, 0, 0, 0.5)"
            }}
        >
            Por favor, espera un momento mientras cargamos el contenido.
        </p>
    </article>
}