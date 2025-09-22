import { useContext } from "react"
import { ContextCart, ContextQuantity } from "../../App";
import type { Product } from "../../types/Product";

export default function PopupCard() {

	const { quantity } = useContext(ContextQuantity) as ContextQuantity
	const { cart } = useContext(ContextCart) as ContextCart

	return (
		<>
			<p>cart = {cart.id}</p>
			<p>quantity = {quantity}</p>
		</>
	)
}