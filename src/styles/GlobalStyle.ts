import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
        --color-primary:#FF577F;
        --color-primary-focus:#FF427F;
        --color-primary-negative:#59323F;

         /* gray tones  */
        --color-gray-0:#F8F9FA;
        --color-gray-1:##656565;
        --color-gray-2:#343B41;
        --color-gray-3:#242424;
        --color-gray-4:#121214;

        /* feedback pallete  */
        --color-sucess:#3FE864;
        --color-negative:#E83F5B;
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
