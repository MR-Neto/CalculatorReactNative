import React from 'react'
import { View } from 'react-native'
import { DisplayText } from './Text'
import styled from 'styled-components/native'

const NumberDisplay = ({ displayText }) => {
    return (
        <Container>
            <DisplayText>{displayText}</DisplayText>
        </Container>
    )
}

const Container = styled(View)`
    width: 100%;
    flex: 2;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
`

export default NumberDisplay
