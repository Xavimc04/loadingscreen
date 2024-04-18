import { useEffect, useRef } from "react";
import { VIDEO_PATH, VIDEO_START } from "../lib/constants";

export default function Video() {
    const ref = useRef<HTMLVideoElement>(null);

    // @ Prevent from intial seconds (credits, etc)
    useEffect(() => {
        if (ref.current) {
            ref.current.currentTime = VIDEO_START;
        }
    })

    return <video 
        autoPlay 
        muted 
        loop 
        ref={ ref } 
        className="min-w-full min-h-full object-cover z-10"
    >
        <source 
            src={ VIDEO_PATH } 
            type="video/mp4" 
        />
    </video>
}