import { WEBSITE_URL } from "../lib/constants";

export default function Media() {
    return <article 
        className="border-4 text-center border-orange-500 text-white relative flex flex-col gap-2 justify-center flex-1 p-10 h-60 hover:scale-95 transition-all hover:cursor-pointer"
        style={{
            boxShadow: "inset 0 0 70px rgba(249, 115, 22, 0.5)"
        }}
    >
        <a
            href={ WEBSITE_URL }
            target="_blank"
        >
            <img 
                src="/icons/website.gif"
                draggable="false"
                className="w-20 h-20 mx-auto"
            />
        </a>
    </article>
}