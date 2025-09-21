import { Text, Card, Box, Space } from '@mantine/core'
// import icon from '../../assets/basket2.svg'


export default function Main() {

	return (
		<>
			<Box component='main' bg='#F3F5FA'>
				<Box ml={80} mr={80}>
					<Space h={60} />
					<Text component='h2' fz={32} fw={600}>Catalog</Text>
					<Space h={49} />
					<Card>cards</Card>
				</Box>
			</Box>
		</>
	)
}

