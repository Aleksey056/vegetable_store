import { Box, Text, Button } from '@mantine/core'
// import { IconPhoto } from '@tabler/icons-react';

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
				<Button color='#54B46A'>
					<Text>Cart</Text>
					<Box ><a href='./'></a></Box>
				</Button>
			</Box>
		</Box >

	)
}	