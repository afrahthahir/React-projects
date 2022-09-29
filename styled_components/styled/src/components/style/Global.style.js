import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body{
 font-family: 'Poppins', sans-serif;
 background-color: ${({ theme }) => theme.colors.body}
}
p{
    line-height : 1.8rem;
    color: #91A1A4;
    font-size: 19px;
}




`;

export default GlobalStyles;
