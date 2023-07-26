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
ThemeProvider.propTypes ={
    children:PropTypes.node

}
// class ThemeContextProvider extends Component {
//     state = { 
//         isLightTheme: true,
//         light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
//         dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
//      } 

//     render() { 
//         return (
//             <ThemeContext.Provider value={{...this.state}}>
//                 {this.props}
                
//             </ThemeContext.Provider>
//         );
//     }
// }
 
export default ThemeContext;