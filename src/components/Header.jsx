import { Box } from '@mui/material'
import React from 'react'
import { dFlex, displayOnDesktop, flexBetweenCenter } from '../themes/commonStyles'
import Logo from './Logo'
import { Container } from '@mui/material'
import LocationSearch from './LocationSearch'
import ProfileSettings from './ProfileSettings'
import MobileSearch from './MobileSearch'

function Header() {
	return (
		<Box
			sx={{
				...dFlex,
				minHeight: 70,
				borderBottom: '1px solid #ddd',
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						...flexBetweenCenter,
						minHeight: 70,
						px: 4,
					}}
				>
					<Box sx={displayOnDesktop}>
						<Logo />
					</Box>
					<Box sx={displayOnDesktop}>
						<LocationSearch />
					</Box>
					<Box sx={displayOnDesktop}>
						<ProfileSettings />
					</Box>
					<Box
						sx={{
							display: { xs: 'flex', md: 'none' },
							px: 5,
						}}
					>
						<Logo />
						<MobileSearch />
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Header
