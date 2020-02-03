import React from 'react'
import { StatusBar } from 'react-native'

import Home from './src/screens/Home'

const App = () => {
	return (
		<>
			<StatusBar barStyle='dark-content' />
			<Home />
		</>
	)
}

export default App
