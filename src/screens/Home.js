import React, { useReducer } from 'react'
import { SafeAreaView } from 'react-native'
import NumberDisplay from '../components/NumberDisplay'
import Grid from '../components/Grid'

import styled from 'styled-components/native'
import ColorConfig from '../configs/ColorConfig'
import { initialState, reducer } from '../reducers/calculatorReducer'

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Container>
            <NumberDisplay state={state} />
            <Grid dispatch={dispatch} operation={state.operation} />
        </Container>
    )
}

const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: ${ColorConfig.black};
`

export default Home
