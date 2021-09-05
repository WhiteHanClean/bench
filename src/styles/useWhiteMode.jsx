import {useState} from 'react';

export const useWhiteMode = () => {
    const [theme, setTheme] = useState('dark');

    const toogleTheme = () => {
        theme === 'dark' ? setTheme('ligth') : setTheme('dark')
    }

    return [ theme , toogleTheme ]
};