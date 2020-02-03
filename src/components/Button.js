import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonText } from './Text'
import styled from 'styled-components/native'
import ColorConfig from '../configs/ColorConfig'

export const ButtonCalculator = ({ children, onPress, isOperation }) => {
    return (
        <ButtonContainer onPress={onPress} isOperation={isOperation} >
            <ButtonText>{children}</ButtonText>
        </ButtonContainer>
    )
}

const ButtonContainer = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
    background-color: ${({ isOperation }) => isOperation ? ColorConfig.orange : ColorConfig.lightGrey};
`
