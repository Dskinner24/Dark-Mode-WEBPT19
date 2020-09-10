import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [mode, setMode] = useLocalStorage(key, initialValue)

    useEffect(() => {
        if (mode === true) {
            document.body.className = 'dark-mode';
        } else
        document.body.className = '';
    }, [mode, setMode])

    return [mode, setMode];
}