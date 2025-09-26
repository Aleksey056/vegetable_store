import { Alert, Button, Card, Flex, Group, Image, Text } from "@mantine/core";
import basket from '../../assets/basketGreen.svg'
import type { Product } from "../../types/Product";
import Stepper from "../Stepper/Stepper";
import { useContext, useState } from "react";
import { ContextBasket, type ContextBasketType } from "../../App";

export default function ProdutCart({ id, name, price, image }: Product) {

	const { setCart } = useContext(ContextBasket) as ContextBasketType

	const [value, setValue] = useState(1);

	const handleAddPopup = () => {
		setCart(prevArr => {
			const index = prevArr.findIndex(item => item.id === id)
			if (index >= 0) {
				const update = [...prevArr]
				update[index] = {
					...update[index],
					value: update[index].value + value,
				}
				return update
			} else {
				return [...prevArr, { id, name, price, image, value }];
			}
		})
		setValue(1)
	}

	return (
		<Card bdrs={24} w={302} h={414} py={16}>
			<Flex direction={'column'} justify={'center'} gap={16}>
				<Image src={image} w={276} h={276}></Image>
				<Group justify="space-between">
					<Group gap={12} justify="space-between">
						<Text component="h4" fw={600} fz={18}>{name.split(' - ')[0]}</Text>
						<Text color="#868E96" component="span" fw={600} fz={14}>{name.trim().split('-')[1]}</Text>
					</Group>
					<Stepper value={value} onChange={setValue} />
				</Group>
				<Flex align={'center'} justify={'space-between'} >
					<Text fw={600} fz={20}>$ {price * value}</Text>
					<Button disabled={value < 1} w={204} h={44} bg={'#E7FAEB'} bdrs={8}
						leftSection={<Text color="#3B944E" fw={600} fz={16}>Add to cart</Text>}
						rightSection={<Image src={basket}></Image>} onClick={handleAddPopup}>
					</Button>
				</Flex>
			</Flex>
		</Card >
	)
}