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

    .YouReceive {
        border-bottom: 1px solid #5D9CEC;
        padding-right: 1.25rem;
        font-weight: 700;
        color: #3D75BB;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: .9375rem;
        font-style: italic;
        color: #5D9CEC;

        span {
            font-weight: 700;
            color: #5D9CEC;
            font-style: italic;
        }
    }


`