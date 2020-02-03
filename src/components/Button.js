import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonText } from './Text'
import styled from 'styled-components/native'
import ColorConfig from '../configs/ColorConfig'

export const ButtonCalculator = ({ children, onPress, isOperation, flex }) => {
    return (
        <ButtonContainer onPress={onPress} isOperation={isOperation} flex={flex} >
            <ButtonText>{children}</ButtonText>
        </ButtonContainer>
    )
}

const ButtonContainer = styled(TouchableOpacity)`
    border: 1px white;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex: ${({ flex }) => flex || 1};
    background-color: ${ ({ isOperation }) => isOperation ? ColorConfig.orange : ColorConfig.lightGrey };
`
