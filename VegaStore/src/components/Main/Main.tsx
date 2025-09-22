import { Text, Box, Space, Group } from '@mantine/core'
import getProductsAPI from '../../services/getProductsAPI.tsx'
import ProdutCart from '../Cards/ProductCard.tsx'
import ProductCardLoader from '../Cards/ProductCardLoader.tsx';


export default function Main() {
	const { catalog, loading } = getProductsAPI()

	return (
		<>
			<Box component='main' bg='#F3F5FA' maw={1440} mb={100}>
				<Box ml={80} mr={80}>
					<Space h={60} />
					<Text component='h2' fz={32} fw={600}>Catalog</Text>
					<Space h={49} />
					<Group wrap='wrap' gap={24}>
						{loading ?
							Array.from({ length: 30 }).map((_, i) => < ProductCardLoader key={i} />)
							:
							catalog.map(({ id, name, price, image, category }) => (<ProdutCart
								key={`${id}+${name}`}
								id={id}
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

