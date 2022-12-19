import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaRegHeart, FaRegUserCircle, FaSearch } from 'react-icons/fa'

const footerMenu = [
	{ id: 1, text: 'Explore', icon: <FaSearch size={18} /> },
	{ id: 2, text: 'Wishlist', icon: <FaRegHeart size={18} /> },
	{ id: 3, text: 'Login', icon: <FaRegUserCircle size={18} /> },
]

function FooterMenu() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flex: 1,
			}}
		>
			<Stack>
				{footerMenu.map((item) => (
					<Button key={item.id}>
						<Stack
							sx={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
							direction="column"
							spacing={1}
						>
							{item.icon}
							<Typography>{item.text}</Typography>
						</Stack>
					</Button>
				))}
			</Stack>
		</Box>
	)
}

export default FooterMenu
