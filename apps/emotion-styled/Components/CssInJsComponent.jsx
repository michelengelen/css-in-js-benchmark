import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    background: black;
    opacity: 0.9;
    color: white;
`

const Example = () => <Container>@emotion/styled</Container>

export default Example
