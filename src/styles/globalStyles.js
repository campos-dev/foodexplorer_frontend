import { createGlobalStyle } from "styled-components";
import { BREAKPOINTS } from "./breakpoints";

export default createGlobalStyle`

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
  
    }

    :root{
    font-size:62.5%;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};

        font-family: 'Roboto', sans-serif;
        color:${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;

        input, textarea{
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            color:${({ theme }) => theme.COLORS.LIGHT_500};
        }
        
        h1, h2, a, button{
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            color:${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
    
    a{
        text-decoration:none;
    }

    button, a{
        cursor:pointer;
        transition: filter .2s;
    }

    button:hover, a:hover {
        filter:brightness(.8)
    }

    @media (max-width: ${BREAKPOINTS.lg}) {
        :root{
             font-size:1vw;
        }
    }

`;
