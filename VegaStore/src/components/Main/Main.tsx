import { Text, Box, Space, Group } from '@mantine/core'
import getProductsAPI from '../../services/getProductsAPI.tsx'
import ProdutCart from '../ProductCard/ProductCard.tsx'


export default function Main() {
	const { catalog, loading } = getProductsAPI()

	return (
		<>
			<Box component='main' bg='#F3F5FA'>
				<Box ml={80} mr={80}>
					<Space h={60} />
					<Text component='h2' fz={32} fw={600}>Catalog</Text>
					<Space h={49} />
					<Group wrap='wrap'>
						{loading ? 'Происходит загрузка продуктов' :
							catalog.map(({ id, name, price, image, category }) => (<ProdutCart
								key={id + name}
								name={name}
								price={price}
								image={image}
								category={category}
							/>)
							)}
					</Group>
				</Box>
			</Box>
		</>
	)
}

