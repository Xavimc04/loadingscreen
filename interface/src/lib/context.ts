import { createContext } from "react"; 

export const defaultContext = {
    watching: false,
    musicEnabled: false,
    musicVolume: 0.3
}

const Context = createContext(defaultContext);

export default Context; 