import { useContext } from "react";
import { ContextCart, ContextQuantity } from "../App";

export function useAllContext() {
	const cart = useContext(ContextCart);
	const quantity = useContext(ContextQuantity);

	return { cart, quantity };
}	