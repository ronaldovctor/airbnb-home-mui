import { Box } from '@mui/system'
import React from 'react'
import { dFlex, flexBetweenCenter } from '../themes/commonStyles'
import Logo from './Logo'
import { Container } from '@mui/material'

function Header() {
	return (
		<Box
			sx={{
				...dFlex,
				minHeight: 70,
				borderBottom: '1px solid #ddd',
			}}
		>
			<Container maxWidth="xl">
				<Box
					sx={{
						...flexBetweenCenter,
						minHeight: 70,
						px: 4,
					}}
				>
					<Logo />
				</Box>
			</Container>
		</Box>
	)
}

export default Header
