export default function Player() {
    return <article 
        className="border-4 text-center border-green-500 text-white relative flex flex-col gap-2 justify-center w-1/2 p-10 h-60"
        style={{
            boxShadow: "inset 0 0 70px rgba(34, 197, 94, 0.5)"
        }}
    >
        <h2
            className="poppins text-xl"
            style={{
                textShadow: "0 0 3px rgba(0, 0, 0, 0.5)"
            }}
        >
            Bandoleros - Don Omar & Tego Calderón
        </h2>

        <p className="opacity-40">
            Sonando...
        </p>
    </article>
}