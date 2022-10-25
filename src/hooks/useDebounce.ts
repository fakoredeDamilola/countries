import { useEffect, useState } from "react";

export function useDebounce(value:string, delay:number=1000) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    // create debounce
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
        
    }, [value, delay]);

    return debouncedValue;
}