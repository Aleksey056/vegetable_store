import { Box, Text, Button, Flex, Center, Badge } from '@mantine/core'
import icon from '../../assets/basket2.svg'


export default function Header() {

	return (
		<Flex
			component='header' justify={'space-between'} w={1440} pr={20} pl={20} h={59} align="center" bg='#FFFFFF'>
			<Flex
				align='center'
				gap={8}
				justify='center'
				wrap='nowrap'
				direction={'row'}>
				<Text >Vegatable</Text>
				<Badge fw={500} bg='#54B46A' bdrs={21} c="white" h={33} w={80} ta={Center} fz={20} fs='medium'>SHOP</Badge>
			</Flex>

			<Box>
				<Button color='#54B46A' w={144} h={44} display={Flex} ta={Center} bdrs={8} leftSection={<Text>Cart</Text>} rightSection={<img src={icon} />} />
			</Box>
		</Flex >

	)
}

// style={{
// 				display: 'flex',
// 				textAlign: 'center',
// 				alignItems: 'center',
// 				columnGap: '8px'
// 			}}