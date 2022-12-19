import Box from '@mui/material/Box'
import React from 'react'
import { FaAirbnb } from 'react-icons/fa'
import { flexCenter } from '../themes/commonStyles'
import { Typography } from '@mui/material'
import { pink } from '@mui/material/colors'

function Logo() {
	return (
		<Box sx={flexCenter}>
			<FaAirbnb size={40} color={pink[500]} />
			<Typography
				sx={{
					ml: 1,
					color: (theme) => theme.palette.secondary.main,
					fontSize: '20px',
					fontWeight: 'bold',
				}}
				component="h3"
			>
				airBnB
			</Typography>
		</Box>
	)
}

export default Logo
