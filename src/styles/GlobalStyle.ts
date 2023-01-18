import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
      
         /* gray tones  */
        --color-gray-0:#FFFF;
        --color-gray-1:#656565;

        /* blue pallete  */
        --color-blue:#5D9CEC;
        --color-blue-1:#3D75BB;
    }
   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    
    
  }
  ul,ol,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  button{
    cursor: pointer;
  }


`;
export default GlobalStyle;
