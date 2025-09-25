import './App.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import { createContext, useState } from 'react';
import type { Product } from './types/Product';

export type ContextBasketType = {
	cart: Product[],
	setCart: React.Dispatch<React.SetStateAction<Product[]>>,
}

export const ContextBasket = createContext<ContextBasketType>({
	cart: [],
	setCart: () => { },
})

function App() {
	const [cart, setCart] = useState<Product[]>([]);

	console.log('cart in app: ', cart);

	// 	const addToBasket = (cart: CartBasket) => {
	// 		// const {id, name, value, image, price, }
	// 		const AvailableInBasket = cart.find(el => el.id === cart.id); // имеется в корзине
	// 		if (AvailableInBasket) {
	// 			const newCartToBasket = cart.map(el => {
	// 				if (el.id === cart.id) {
	// 					return (...el, el.value + value)
	// 		}
	// 		return el
	// 	}).filter(el => elem.value > 0)
	// 	setCart(newCartToBasket)
	// } else {
	// 	if CaretPosition.value
	// }
	// 		}

	return (
		<>
			<ContextBasket.Provider value={{ cart, setCart }}>
				<MantineProvider>
					<Header />
					<Main />
				</MantineProvider >
			</ContextBasket.Provider>
		</>
	)
}

export default App
