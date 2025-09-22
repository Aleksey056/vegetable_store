import './App.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import { createContext, useState } from 'react';

// type Context = {

// }

// export const Context = createContext([])
export const ContextQuantity = createContext(0)
// export const ContextCart = createContext({})

function App() {
	const [quantity, setQuantity] = useState(0);
	// const [cart, setCart] = useState({});

	console.log('quantity in app', quantity);



	return (
		<>
			<ContextQuantity.Provider value={{ quantity, setQuantity }}>
				<MantineProvider>
					<Header />
					<Main />
				</MantineProvider >
			</ContextQuantity.Provider >
		</>
	)
}

export default App
