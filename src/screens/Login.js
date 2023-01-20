import { useState } from "react";
import styled, { css } from "styled-components";

import { isLoggedInVar } from "../apollo";

const Container = styled.div`
    background-color: gray;
`;

const Title = styled.h1`
    color: ${(props) => (props.green ? "green" : "beige")};
    ${(props) => (
        props.green 
        ? css`
            font-weight: bold;
        `
        : css`
            text-decoration: underline;
        `
    )};
`;

const Toggle = styled.button`
    color: green;
`;

function Login() {
    const [green, setGreen] = useState(false);
    const toggleGreen = () => setGreen((current) => !current);
    
    return (
        <Container>
            <Title green={green}>Login</Title>
            <Toggle onClick={toggleGreen}>toggle</Toggle>

            <button onClick={() => isLoggedInVar(true)}>
                Log in now!
            </button>

        </Container>
    );
}

export default Login;
