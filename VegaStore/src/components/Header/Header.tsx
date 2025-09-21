import { Box, Text, Button } from '@mantine/core'

export default function Header() {

	return (
		<Box component='header'
			style={{
				// position: 'absolute',
				// top: 0,
				height: '59px',
				display: 'flex',
				alignItems: 'center',
				padding: '0 20px',
				width: '100%',
				justifyContent: 'space-between'
			}}>
			<Box
				style={{
					display: 'flex',
					columnGap: '8px',
				}}>
				<Text>Vegatable</Text>
				<Text>SHOP</Text>
			</Box>
			<Box>
				<Button>
					Bascek
				</Button>
			</Box>
		</Box>

	)
}	