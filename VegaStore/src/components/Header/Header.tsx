import { Box, Text, Button, Flex, Badge, Group, Center, Popover } from '@mantine/core'
import icon from '../../assets/basket2.svg'
import PopupCard from '../Cards/PopupCard'
import { ContextBasket, type ContextBasketType } from '../../App'
import { useContext } from 'react'


export default function Header() {

	const { cart } = useContext(ContextBasket) as ContextBasketType

	const totalQuantity = cart.reduce((acc, item) => acc + item.value, null);

	return (
		<Center>
			<Flex component='header' className='header' justify={'space-between'} miw={1440} pr={20} pl={20} h={59} align="center" bg='#FFFFFF' pos={'sticky'} top={0} >

				<Group className='header__logo' bg={'#F7F7F7'} align='center' justify='space-between' w={209} h={33} bdrs={31} pl={12}>
					<Text fz={22} fw={600} >Vegatable</Text>
					<Badge fw={500} bg='#54B46A' bdrs={21} c="white" h={33} w={80} ta={'center'} fz={20} fs='medium'>SHOP</Badge>
				</Group>

				<Popover>
					<Popover.Target>
						<Box>

							<Button color='#54B46A' w={144} h={44} display={Flex} ta={'center'} bdrs={8} leftSection={<Text>{totalQuantity}</Text>} rightSection={<img src={icon} />} >
								<Text fz={16} fw={600}>Cart</Text>
							</Button>

						</Box>
					</Popover.Target>

					<Popover.Dropdown bg={'none'} bd={'none'} >
						<PopupCard ></PopupCard>
					</Popover.Dropdown>

				</Popover>

				{/* */}
			</Flex >

		</Center >

	)
}
