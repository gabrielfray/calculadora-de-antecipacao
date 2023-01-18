import styled from "styled-components";

export const CalculatorContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 1.1rem;

width: 100vw;
height: 100vh;

background-color: var(--color-gray-0);
border: .125rem solid #D1DCE3;
box-shadow: .3125rem .375rem .25rem -0.0625rem rgba(153,141,153,1);
border-radius: .375rem;

    @media (min-width: 48rem) {
        flex-direction: row;
        width: 38rem;
        height: 27rem;
    }

    .contentForm{
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            color: var(--color-gray-1);
            font-size: 1.5rem;
            font-weight: bold;
            padding: 2.625rem 0rem 1.25rem 0rem;
        }

         @media (min-width: 48rem) {
            width: 60%;
            margin-bottom: 2.75rem;
        }
    }

    
    .calculatorForm {
        display: flex;
        flex-direction: column;
        gap: 1.625rem;

        div{
            display: flex;
            flex-direction: column;
            gap: .375rem;
            position: relative;
            
            height: 89px;            
        }

        label {
            color: var(--color-gray-1);
            font-size: .875rem;
        }
        
}
`
export const Input = styled.input`
width: 15.6875rem;
padding: 0.8rem;

border-radius: 0.4rem;
border: .125rem solid #DDE6E9;

outline: none;

    :focus {
        border: .125rem solid #66AFE9;
    }
    ::placeholder {
        color: #CECECE;
    }
    ::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
`
export const ErrorMessage = styled.span`
display: flex;
align-self: flex-start;
padding-left: .25rem;
position: absolute;
bottom: 0px;

font-weight: 600;
font-size: .8rem;
color: #DC3535;
`;
