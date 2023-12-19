import { createContext } from "react";

export type ContextCountProductsType = {
    contextProductsCount : number;
    setContextProductsCount: (contextProductsCount : number) => void;
}

export const ContextCountProducts = createContext<ContextCountProductsType>({
    contextProductsCount: 0,
    setContextProductsCount : () => {}
});