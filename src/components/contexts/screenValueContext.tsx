import { createContext, Dispatch } from "react";
import { State, Actions } from "../Wrapper/Wrapper";

export const screenValueContext = createContext<[State, Dispatch<Actions>] | null>(null)