import GamePercent from "./components/game-percent";
import Video from "./components/video";
import { SERVER_DESCRIPTION, SERVER_NAME } from "./lib/constants";

export default function Page() {
    return <main className='h-screen w-screen'>
        <Video />

        {/* @ Loading content */}
        <div className="bg-zinc-900/80 backdrop-blur-md absolute z-20 top-0 left-0 w-screen h-screen flex justify-end">
            <img 
                src="/images/arenawar.png"
                draggable="false"
                className="absolute w-full object-cover z-30 -bottom-60 -left-[150px] h-auto hidden lg:block"
            />

            <img 
                src="/images/arenawar.png"
                draggable="false"
                className="absolute w-full h-auto object-cover z-20 blur-2xl -bottom-60 -left-[170px] hidden lg:block"
            />

            {/* @ Information */}
            <section className="w-1/3 mr-48 text-white flex flex-col justify-center gap-2 z-40">
                <h1 className="text-6xl poppins text-transparent bg-clip-text bg-gradient-to-r to-gray-500 from-white">
                    { SERVER_NAME }
                </h1>

                <p className="text-lg opacity-30">
                    { SERVER_DESCRIPTION }
                </p>

                <div className="mt-5 flex flex-wrap gap-4">
                    {/* @ Game percent */}
                    <GamePercent />

                    {/* @ Music */}
                    <article 
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
                </div>
            </section>
        </div>
    </main>
}