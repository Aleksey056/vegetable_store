import { ActionIcon, Box, Button, Card, Flex, Group, Image, Space, Text } from "@mantine/core";
import basket from '../../assets/basketGreen.svg'
import type { Product } from "../../types/Product";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useCounter } from "@mantine/hooks";

export default function ProdutCart({ id, name, price, image }: Product) {

	const [value, { increment, decrement }] = useCounter(1, { min: 0 }); // увеличение/уменьшение количества товаров (для карточки)

	return (
		<Card bdrs={24} w={302} h={414} py={16}>
			<Flex direction={'column'} justify={'center'} gap={16}>
				{/* <Card.Section> */}
				<Image src={image} w={276} h={276}></Image>
				{/* </Card.Section> */}

				{/* <Space h={16} /> */}

				<Group justify="space-between">
					<Group gap={12} justify="space-between">
						<Text component="h4" fw={600} fz={18}>{name.split(' - ')[0]}</Text>
						<Text color="#868E96" component="span" fw={600} fz={14}>{name.split('-')[1]}</Text>
					</Group>

					<Group gap={10}>
						<ActionIcon onClick={decrement} bg={'#DEE2E6'} size={30} bdrs={8}><IconMinus size={12} color="black" /></ActionIcon>

						<Text>{value}</Text>

						<ActionIcon onClick={increment} bg={'#DEE2E6'} size={30} bdrs={8}><IconPlus size={12} color="black" /></ActionIcon>
					</Group>
				</Group>

				{/* <Space h={16} /> */}

				<Flex align={'center'} justify={'space-between'} >
					<Text fw={600} fz={20}>$ {price * value}</Text>
					<Button w={204} h={44} bg={'#E7FAEB'} bdrs={8}
						leftSection={<Text color="#3B944E" fw={600} fz={16}>Add to card</Text>}
						rightSection={<Image src={basket}></Image>}>
					</Button>
				</Flex>
			</Flex>
		</Card >
	)
}