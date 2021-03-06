import React from 'react'
import styled from 'styled-components'

function Loading() {
    return (
        <>
            <ImageBackground />
            <ImageHolder>
                <ImageLoader src={require('../assests/ezgif.com-gif-maker.gif')} alt="" />
            </ImageHolder>
        </>
    )
}

const ImageHolder = styled.div`
  height: 100vh;
  width: 100%;
  opacity: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 33
`

const ImageLoader = styled.img`
position: relative;
  z-index: 34;
`

const ImageBackground = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #000;
  opacity: .9;
  top: 0;
  z-index: 32
`
export default Loading