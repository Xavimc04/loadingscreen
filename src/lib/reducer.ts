import { IContext } from "./types";

export default function reducer(state: IContext, action: {
    type: string;
    payload?: any;
}): IContext {
    switch (action.type) {
        case 'TOGGLE_WATCHING':
            return { ...state, watching: !state.watching };
        case 'TOGGLE_MUSIC':
            return { ...state, musicEnabled: !state.musicEnabled };
        case 'SET_VOLUME':
            return { ...state, musicVolume: action.payload };
        default:
            return state;
    }
}