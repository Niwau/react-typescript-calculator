import React, { createContext } from "react";

export type screenValueContextType = [
    screenValue: string,
    setScreenValue: React.Dispatch<React.SetStateAction<string>>
]

export const screenValueContext = createContext<screenValueContextType>({} as screenValueContextType)