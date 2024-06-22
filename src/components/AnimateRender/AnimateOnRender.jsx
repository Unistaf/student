import React from "react"
import styled from "styled-components"

const Container = styled.div`
  animation-name: render;
  animation-duration: 400ms;

  @keyframes render {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
`

const AnimateOnRender = ({ children }) => {
  return (
    <Container>{children}</Container>
  )
}

export default AnimateOnRender