import { ActionIcon, Box, Button, Card, Flex, Group, Image, Text } from "@mantine/core";
import icon from '../../assets/basket2.svg'
import type { Product } from "../../types/Product";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useCounter } from "@mantine/hooks";


type Catalog = {
	catalog: Product[],
}

export default function ProdutCart({ id, name, price, image, category }: Catalog) {

	const [value, { increment, decrement }] = useCounter(1, { min: 0 }); // увеличение/уменьшение количества товаров (для карточки)

	return (
		<Card bdrs={24}>
			<Box>
				<Card.Section>
					<Image src={image} w={276} h={276}></Image>
				</Card.Section>

				<Group>
					<Text>{name}</Text>
					<Group>
						<ActionIcon onClick={decrement} bg={'#DEE2E6'} size={30} bdrs={8}><IconMinus size={12} color="black" /></ActionIcon>
						<Text fw={600}>{value}</Text>
						<ActionIcon onClick={increment} bg={'#DEE2E6'} size={30} bdrs={8}><IconPlus size={12} color="black" /></ActionIcon>
					</Group>
				</Group>

				<Flex>
					<Text>$ {price * value}</Text>
					<Button
						leftSection={<Text>Add to card</Text>}
						rightSection={<Image src={icon}></Image>}>
					</Button>
				</Flex>
			</Box >
		</Card >
	)
}