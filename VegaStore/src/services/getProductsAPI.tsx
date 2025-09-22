import { useEffect, useState } from "react";
import ky from 'ky'
import type { Product } from "../types/Product";



export default function useProducts() {

	const [catalog, setCatalog] = useState<Product[]>([])
	const [loading, setLoading] = useState(true)

	const url = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"

	useEffect(() => {
		const getProductsAPI = async () => {
			try {
				const products = await ky.get(url).json<Product[]>();
				setCatalog(products)
			} catch (err) {
				console.log('Ошибка загрузки товарок', err)
			} finally {
				setLoading(false)
			}

		}
		getProductsAPI()
	}, [])

	return { loading, catalog }
}