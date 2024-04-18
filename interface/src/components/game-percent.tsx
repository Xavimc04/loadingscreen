export default function GamePercent() {
    return <article 
        className="border-4 border-indigo-500 text-white relative flex flex-col gap-2 justify-center px-8 h-28 w-full"
        style={{
            boxShadow: "inset 0 0 70px rgba(99, 102, 241, 0.5)"
        }}
    >
        <div className="h-full w-4/6 bg-indigo-500 absolute left-0 -z-10"></div>

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