import { ActionIcon, Button, Card, Group, Image, Text } from "@mantine/core";
// import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import icon from '../../assets/basket2.svg'
import type { Product } from "../../types/Product";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useCounter } from "@mantine/hooks";

type Catalog = {
	catalog: Product[],
}

// interface ProductCardProps {
// 	id: string;
// 	name: string;
// 	image: string;
// 	price: number;
// 	unit: string; // например "1 kg"
// 	onAddToCart: (id: string, quantity: number) => void;
// }

export default function ProdutCart(catalog: Catalog) {

	const [value, { increment, decrement }] = useCounter(1, { min: 0 });

	console.log(catalog)

	return (
		<Card bdrs={24}>

			<Card.Section>
				{/* <Image src={image}></Image> */}
			</Card.Section>

			<Group>
				{/* <Text>{catalog.name}</Text> */}
				<Text>inut</Text>
			</Group>

			<Group>
				<ActionIcon onClick={decrement} bg={'#DEE2E6'} size={30} bdrs={8}><IconMinus size={12} color="black" /></ActionIcon>
				<Text fw={600}>{value}</Text>
				<ActionIcon onClick={increment} bg={'#DEE2E6'} size={30} bdrs={8}><IconPlus size={12} color="black" /></ActionIcon>
			</Group>

			<Group>
				<Text>$ price * quality</Text>
				<Button
					leftSection={<Text>Add to card</Text>}
					rightSection={<Image src={icon}></Image>}>
				</Button>
			</Group>

		</Card >
	)
}