import Video from "./components/video";

export default function Page() {
    return <main className='h-screen w-screen'>
        <Video />

        {/* @ Loading content */}
        <div className="bg-black/70 backdrop-blur-md absolute z-20 top-0 left-0 w-screen h-screen">
            Loading content...
        </div>
    </main>
}