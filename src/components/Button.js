import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonText } from './Text'
import styled from 'styled-components/native'
import ColorConfig from '../configs/ColorConfig'

export const ButtonCalculator = ({ children, onPress, isOperation, operation, flex }) => {
    return (
        <ButtonContainer onPress={onPress} isOperation={isOperation} flex={flex} activeOperation={operation === children} >
            <ButtonText isOperation={isOperation}>{children}</ButtonText>
        </ButtonContainer>
    )
}

const ButtonContainer = styled(TouchableOpacity)`
    borderRightColor: ${ColorConfig.black};
    borderRightWidth: 0.5px;
    borderBottomColor: ${ColorConfig.black};
    borderBottomWidth: 0.5px;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex: ${({ flex }) => flex || 1};
    background-color: ${ ({ isOperation, activeOperation }) => isOperation ? activeOperation ? ColorConfig.black : ColorConfig.orange  : ColorConfig.lightGrey};
`
