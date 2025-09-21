import { Text, Box, Space, Flex } from '@mantine/core'
// import icon from '../../assets/basket2.svg'
import useProducts from '../../services/useCards.tsx'
import ProdutCart from '../ProductCard/ProductCard.tsx'


export default function Main() {
	const { catalog } = useProducts()

	return (
		<>
			<Box component='main' bg='#F3F5FA'>
				<Box ml={80} mr={80}>
					<Space h={60} />
					<Text component='h2' fz={32} fw={600}>Catalog</Text>
					<Space h={49} />
					<Flex>
						<ProdutCart catalog={catalog}></ProdutCart>
					</Flex>
				</Box>
			</Box>
		</>
	)
}

