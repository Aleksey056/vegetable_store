import { Box, Text, Button, Flex, Badge, Group, Center, Popover, Image } from '@mantine/core'
import icon from '../../assets/basket2.svg'
import clearBasket from '../../assets/cart_empty.svg'


export default function Header() {

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
							<Button color='#54B46A' w={144} h={44} display={Flex} ta={'center'} bdrs={8} leftSection={<Text fz={16} fw={600}>Cart</Text>} rightSection={<img src={icon} />} />
						</Box>
					</Popover.Target>

					<Popover.Dropdown bg={'none'} bd={'none'} >
						<Flex w={301} h={227} bg={'#FFFFFF'} bdrs={16} direction={"column"} justify={'center'} align={'center'} style={{ boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)', }} hidden={false} pos={'absolute'} right={-60}	>
							<Image src={clearBasket} w={118} h={107} mb={24} />
							<Text color="#868E96" >You cart is empty!</Text>
						</ Flex >
					</Popover.Dropdown>

				</Popover>

				{/* <PopupCard ></PopupCard> */}
			</Flex >

		</Center >

	)
}
