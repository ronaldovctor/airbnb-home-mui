import { Button, Divider, Paper, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { IoSearchCircleSharp } from 'react-icons/io5'
import React from 'react'
import { pink } from '@mui/material/colors'
import { dFlex } from '../themes/commonStyles'

const choices = [
	{ id: 1, text: 'Anywhere' },
	{ id: 2, text: 'Any week' },
	{ id: 3, text: 'Add guest', withIcon: true },
]

function LocationSearch() {
	return (
		<Paper
			sx={{
				border: '1px solid #ddd',
				borderRadius: 20,
				ml: 15,
				p: '4px',
				boxShadow: '0 2px 10px #ddd',
			}}
			elevation={2}
		>
			<Stack
				sx={{
					borderRadius: 20,
					pl: 2,
				}}
				divider={<Divider orientation="vertical" flexItem />}
			>
				{choices.map((choice) => (
					<Button key={choice.id}>
						<Typography
							sx={{
								color: (theme) => theme.palette.text.primary,
								fontWeight: 'bold',
							}}
						>
							{choice.text}
						</Typography>
						{choice.withIcon && (
							<Box
								sx={{
									...dFlex,
									alignItems: 'center',
									ml: 1,
								}}
							>
								<IoSearchCircleSharp color={pink[500]} size={32} />
							</Box>
						)}
					</Button>
				))}
			</Stack>
		</Paper>
	)
}

export default LocationSearch
