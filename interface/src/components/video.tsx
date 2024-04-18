import { useEffect, useRef } from "react";
import { VIDEO_PATH } from "../lib/constants";

export default function Video() {
    const ref = useRef<HTMLVideoElement>(null);

    // @ Prevent from 20 initial seconds
    useEffect(() => {
        if (ref.current) {
            ref.current.currentTime = 20;
        }
    })

    return <video 
        autoPlay 
        muted 
        loop 
        ref={ ref } 
        className="min-w-full min-h-full object-cover"
    >
        <source 
            src={ VIDEO_PATH } 
            type="video/mp4" 
        />
    </video>
}