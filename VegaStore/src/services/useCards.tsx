import { useEffect, useState } from "react";
import ky from 'ky'
import type { Product } from "../types/Product";



export default function useProducts() {

	const [catalog, setCatalog] = useState<Product[]>([])

	const url = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"

	useEffect(() => {
		const getProducts = async () => {
			const products = await ky
				.get(url)
				.json<Product[]>();
			setCatalog(products)
		}
		getProducts()
	}, [])
	return { catalog }
}