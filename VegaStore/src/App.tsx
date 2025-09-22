import './App.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import { createContext, useState } from 'react';

export type ContextQuantity = {
	quantity: number,
	setQuantity: (value: number) => void;
}

// export const Context = createContext([])
export const ContextQuantity = createContext<ContextQuantity | undefined>(undefined)
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
