import { Box, Text, Button, Flex, Badge, Group, Center, Popover } from '@mantine/core'
import icon from '../../assets/basket2.svg'
import PopupCard from '../Cards/PopupCard'
import { ContextBasket, type ContextBasketType } from '../../App'
import { useContext } from 'react'

export default function Header() {

	const { cart } = useContext(ContextBasket) as ContextBasketType

	const totalQuantity = cart.reduce((acc, item) => acc + item.value, 0);

	return (
		<Center >
			<Flex component='header' className='header' justify={'space-between'} miw={1440} pr={20} pl={20} h={59} align="center" bg='#FFFFFF' pos={'fixed'} top={0} style={{ zIndex: '100' }}>
				<Group className='header__logo' bg={'#F7F7F7'} align='center' justify='space-between' w={209} h={33} bdrs={31} pl={12}>
					<Text fz={22} fw={600} >Vegatable</Text>
					<Badge fw={500} bg='#54B46A' bdrs={21} c="white" h={33} w={80} ta={'center'} fz={20} fs='medium'>SHOP</Badge>
				</Group>
				<Popover>
					<Popover.Target>
						<Box>
							<Button color='#54B46A' w={144} h={44} display={Flex} ta={'center'} bdrs={8}
								leftSection={
									totalQuantity > 0 ? (
										<Flex w={20} h={20} bg={'white'} bdrs={36} align={'center'} justify={'center'}>
											<Text color='black' fw={600} fz={14}>{totalQuantity}
											</Text>
										</Flex>
									) : null
								}
								rightSection={<img src={icon} />} >
								<Text fz={16} fw={600}>Cart</Text>
							</Button>
						</Box>
					</Popover.Target>
					<Popover.Dropdown bg={'none'} bd={'none'} >
						<PopupCard ></PopupCard>
					</Popover.Dropdown>
				</Popover>
			</Flex >
		</Center >
	)
}
