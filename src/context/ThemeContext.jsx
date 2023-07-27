// Dark Theme Logic and CSS Page

import   { createContext, useEffect, useState } from 'react';
import  PropTypes from 'prop-types';

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
    }
};

 export const ThemeContext = createContext();


export const ThemeProvider = ({ children  }) => {
    const [isDark, setIsDark] = useState (false);
    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark));
        setIsDark (!isDark);
    }

    const theme = isDark ? themes.dark : themes.light;
useEffect(()=>{
    const isDark = localStorage.getItem('isDark') ==='true';
    setIsDark(isDark);
}, []);
    return (
            <ThemeContext.Provider value = {[{theme, isDark}, toggleTheme]}>{children}
        </ThemeContext.Provider>
    )
}
// Allows children to be stated 
ThemeProvider.propTypes ={
    children:PropTypes.node

}
 
export default ThemeContext;