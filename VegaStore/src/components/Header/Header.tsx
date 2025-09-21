import { Box, Text, Button, Flex, Center, Badge } from '@mantine/core'
import icon from '../../assets/basket2.svg'


export default function Header() {

	return (
		<Box component='header'
			style={{
				// position: 'absolute',
				// top: 0,
				height: '59px',
				display: 'flex',
				alignItems: 'center',
				padding: '0 20px',
				width: '100%',
				// justifyContent: 'space-between'
			}}>
			<Flex
				align='center'
				gap={8}
				justify='center'
				wrap='nowrap'
				direction={'row'}>
				<Text fw={600} >Vegatable</Text>
				<Badge fw={500} bg='#54B46A' bdrs={21} c="white" h={33} w={80} ta={Center} fz={20} fs='medium'>SHOP</Badge>
			</Flex>

			<Box>
				<Button color='#54B46A' w={144} h={44} display={Flex} ta={Center} bdrs={8} leftSection={<Text fw={600}>Card</Text>} rightSection={<img src={icon} />} />
			</Box>
		</Box >

	)
}

// style={{
// 				display: 'flex',
// 				textAlign: 'center',
// 				alignItems: 'center',
// 				columnGap: '8px'
// 			}}