import { createContext } from "react";

const Context = createContext({
    watching: false,
    musicEnabled: false,
    musicVolume: 0.3
});

export default Context; 