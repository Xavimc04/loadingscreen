export default function InterfaceButtonHandler() {
    return <section
        className="fixed top-0 right-0 z-50 mt-5 mr-8 flex items-center gap-4 text-white"
    >
        Mostrar/ocultar interfaz

        <div className="relative flex h-12 w-12 rounded-sm items-center justify-center ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-white/10 opacity-75"></span>

            <span className="relative poppins h-10 rounded-sm w-10 bg-white/30 flex items-center justify-center border-2 border-black/20">
                F1
            </span>
        </div>
    </section>
}