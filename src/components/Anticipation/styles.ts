import styled from "styled-components";

export const ContentReceive = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.30rem;
width: 100%;
height: 100%;

border-radius: 0rem 0rem .3125rem .3125rem;
background-color: #F5F7FA;

     @media (min-width: 768px) {
        border-radius: 0rem .3125rem .3125rem 0rem;
        width: 40%;

    }
    .contentReceive{
        width: 161px;
        border-bottom: 1px solid var(--color-blue);
    }
    .receive {
        font-weight: 700;
        color: var(--color-blue-1);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        font-style: italic;
        color: var(--color-blue);

        span {
            font-weight: 700;
            color: var(--color-blue);
            font-style: italic;
        }
    }


`