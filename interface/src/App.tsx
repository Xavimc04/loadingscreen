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
                <h1 className="text-6xl poppins">
                    { SERVER_NAME }
                </h1>

                <p className="text-lg">
                    { SERVER_DESCRIPTION }
                </p>

                <div className="mt-5">
                    {/* @ Game percent */}
                    <GamePercent />
                </div>
            </section>
        </div>
    </main>
}