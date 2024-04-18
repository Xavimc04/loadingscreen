import GamePercent from "./components/game-percent";
import InterfaceButtonHandler from "./components/interface-button-handler";
import Media from "./components/media";
import Player from "./components/music-player";
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
                className="fixed w-full object-cover z-30 -bottom-60 -left-[300px] h-[1100px] hidden lg:block"
            />

            <img 
                src="/images/arenawar.png"
                draggable="false"
                className="absolute w-full object-cover z-20 blur-2xl -bottom-60 -left-[290px] h-[1100px] hidden lg:block"
            />

            {/* @ Information */}
            <section className="w-[80%] lg:w-1/2 xl:w-1/3 mx-48 text-white flex flex-col justify-center gap-2 z-40">
                <h1 className="text-6xl poppins text-transparent bg-clip-text bg-gradient-to-r to-gray-500 from-white">
                    { SERVER_NAME }
                </h1>

                <p className="text-lg text-red-400">
                    { SERVER_DESCRIPTION }
                </p>

                <div className="mt-5 flex flex-wrap gap-4">
                    {/* @ Game percent */}
                    <GamePercent />

                    {/* @ Music */}
                    <Player />

                    {/* @ Social media */}
                    <Media />
                </div>

                <div className="mt-5">
                    <p className="text-xs opacity-30">
                        © { new Date().getFullYear() } { SERVER_NAME }. Todos los derechos reservados.
                    </p>
                </div>
            </section>
        </div>

        <InterfaceButtonHandler />
    </main>
}