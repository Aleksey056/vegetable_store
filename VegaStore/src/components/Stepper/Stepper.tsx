import { ActionIcon, Group, Text } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";

type Stepper = {
	value: number,
	onChange: (value: number) => void,
}

export default function Stepper({ value, onChange, setQuantity }: Stepper) {

	return (
		<Group gap={10}>

			<ActionIcon onClick={() => onChange(value - 1)} bg={'#DEE2E6'} size={30} bdrs={8}><IconMinus size={12} color="black" /></ActionIcon>

			<Text>{value}</Text>

			<ActionIcon onClick={() => onChange(value + 1)} bg={'#DEE2E6'} size={30} bdrs={8}><IconPlus size={12} color="black" /></ActionIcon>

		</Group>
	)
}