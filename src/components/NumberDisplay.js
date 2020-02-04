import React from 'react'
import { View } from 'react-native'
import { DisplayText, SecondaryDisplayText } from './Text'
import styled from 'styled-components/native'

const NumberDisplay = ({ state }) => {
    const { previousNumber, number, operation } = state
    return (
        <Container>
            {operation && previousNumber && <SecondaryDisplayText>{`${previousNumber} ${operation}`}</SecondaryDisplayText>}
            <DisplayText>{number}</DisplayText>
        </Container>
    )
}

const Container = styled(View)`
    position: relative;
    width: 100%;
    flex: 2;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
`

export default NumberDisplay
