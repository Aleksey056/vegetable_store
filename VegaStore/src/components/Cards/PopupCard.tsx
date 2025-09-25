import { Divider, Flex, Group, Image, Text } from "@mantine/core";
import clearBasket from '../../assets/cart_empty.svg'
import { useContext } from "react";
import { ContextBasket, type ContextBasketType } from "../../App";
import Stepper from "../Stepper/Stepper";

export default function PopupCard() {

	const { cart, setCart } = useContext(ContextBasket) as ContextBasketType

	const removeFromCart = (id: string, value: number) => {
		setCart(prevArr => {
			if (value > 0) {
				return prevArr.map(item =>
					item.id === id ? { ...item, value } : item
				);
			} else {
				return prevArr.filter(item => item.id !== id);
			}
		});
	};

	if (cart.length > 0) {
		return (
			<>
				<Flex bg={'#FFFFFF'} bdrs={16} style={{ boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)', }} pos={'absolute'} right={-60} align={'center'} p={24}>
					{cart.map(item => (
						<Flex w={396} h={80} align={'center'} justify={'space-between'}>
							<Image w={64} h={64} src={item.image} ></Image>
							<Group gap={12} justify="space-between">
								<Text component="h4" fw={600} fz={18}>{item.name.split(' - ')[0]}</Text>
								<Text color="#868E96" component="span" fw={600} fz={14}>{item.name.trim().split('-')[1]}</Text>
							</Group>
							<Text>き  {item.price}</Text>
							<Stepper
								value={item.value}
								onChange={(value) => removeFromCart(item.id, value)} />
							<Divider color="#E9ECEF" my={8}></Divider>
						</Flex>
					))}
				</Flex>
			</>
		)
	} else {
		return (
			<>
				<Flex w={301} h={227} bg={'#FFFFFF'} bdrs={16} direction={"column"} justify={'center'} align={'center'} style={{ boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)', }} pos={'absolute'} right={-60}	>
					<Image src={clearBasket} w={118} h={107} mb={24} />
					<Text color="#868E96" >You cart is empty!</Text>
				</ Flex >
			</>
		)
	}
}