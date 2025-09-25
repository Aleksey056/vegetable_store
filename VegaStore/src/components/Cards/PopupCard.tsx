import { Flex, Image, Text } from "@mantine/core";
import clearBasket from '../../assets/cart_empty.svg'

export default function PopupCard() {
	return (
		<>
			<Flex w={301} h={227} bg={'#FFFFFF'} bdrs={16} direction={"column"} justify={'center'} align={'center'} pos={'absolute'} right={20} top={72} style={{ boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)', }} hidden={false} >
				<Image src={clearBasket} w={118} h={107} mb={24} />
				<Text color="#868E96" >You cart is empty!</Text>
			</ Flex >
		</>
	)
}