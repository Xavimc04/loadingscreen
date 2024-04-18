import { createContext } from "react"; 

export const defaultContext = {
    watching: true,
    musicEnabled: false,
    musicVolume: 0.3
}

const Context = createContext({
    state: defaultContext,
    dispatch: (action: { type: string, payload: any }) => {}
});

export default Context; 