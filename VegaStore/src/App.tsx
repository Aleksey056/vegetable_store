import './App.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import { createContext, useState } from 'react';
import type { Product } from './types/Product';

export type ContextQuantity = {
	quantity: number,
	setQuantity: (value: number) => void,
}

export type ContextCart = {
	cart: Product[],
	setCart: ({ }) => void,
}

// export const Context = createContext([])
export const ContextQuantity = createContext<ContextQuantity | undefined>(undefined)
export const ContextCart = createContext({})

function App() {
	const [quantity, setQuantity] = useState(0);
	const [cart, setCart] = useState({});

	console.log('quantity in app', quantity);

	console.log('cart in app: ', cart);


	return (
		<>
			<ContextCart.Provider value={{ cart, setCart }}>
				<ContextQuantity.Provider value={{ quantity, setQuantity }}>
					<MantineProvider>
						<Header />
						<Main />
					</MantineProvider >
				</ContextQuantity.Provider >
			</ContextCart.Provider>
		</>
	)
}

export default App
