import Video from "./components/video";

export default function Page() {
    return <main className='h-screen w-screen'>
        <Video />

        {/* @ Loading content */}
        <div className="bg-black/70 backdrop-blur-md absolute z-20 top-0 left-0 w-screen h-screen">
            <img 
                src="/images/arenawar.png"
                className="absolute w-full h-full object-cover z-30 -left-[350px] hidden lg:block"
            />

            <img 
                src="/images/arenawar.png"
                className="absolute w-full h-full object-cover z-20 blur-2xl -left-[330px] hidden lg:block"
            />
        </div>
    </main>
}