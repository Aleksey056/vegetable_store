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
				<Flex bg={'#FFFFFF'} bdrs={16} style={{ boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)', }} pos={'absolute'} right={-60} align={'center'} p={24} direction={'column'}>
					{cart.map((item, index) => (
						<>
							<Flex w={396} h={64} align={'center'} justify={'space-between'} key={item.id + item.price}>
								<Flex gap={12}>
									<Image w={64} h={64} src={item.image} ></Image>
									<Flex direction={'column'}>
										<Group gap={12} justify="space-between">
											<Text component="h4" fw={600} fz={18}>{item.name.split(' - ')[0]}</Text>
											<Text color="#868E96" component="span" fw={600} fz={14}>{item.name.trim().split('-')[1]}</Text>
										</Group>
										<Text fw={600} fz={20}>き  {item.price * item.value}</Text>
									</Flex>
								</Flex>
								<Stepper
									value={item.value}
									onChange={(value) => removeFromCart(item.id, value)} />

							</Flex>

							{index !== cart.length - 1 && (
								// <Flex justify={'flex-end'} right={0}>
								<Divider m={14} miw={320} h={1} my={10} mr={0} ml={'auto'} />)}

						</>
					))}

					<Flex mt={12} pt={12} w={396} style={{ borderTop: '1px solid #DEE2E6' }} justify={'space-between'}>
						<Text fw={600} fz={16} >
							Total
						</Text>
						<Text fw={600} fz={16}>
							AllSum
						</Text>
					</Flex>
				</Flex >

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