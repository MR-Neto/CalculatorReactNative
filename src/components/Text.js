import { Text } from 'react-native'

import styled from 'styled-components/native'
import { SanFrancisco } from '../configs/FontConfig'
import ColorConfig from '../configs/ColorConfig'

const TextComponentStyled = styled(Text)`
    font-size: 30px;
    font-weight: 500;
    font-family: ${SanFrancisco};
`

export default TextComponentStyled

export const ButtonText = styled(TextComponentStyled)`
    color: ${ColorConfig.white};
    text-align: center;
`

export const DisplayText = styled(TextComponentStyled)`
    color: ${ColorConfig.white};
    font-size: 50px;
    text-align: right;
`
