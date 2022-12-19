import React from 'react'
import { Box, Button, Stack } from '@mui/material'
import { Link } from '@mui/material'
import { BsGlobe } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import { dFlex, flexCenter } from '../themes/commonStyles'

function ProfileSettings() {
	return (
		<Box sx={flexCenter}>
			<Link
				href="./"
				sx={{
					whiteSpace: 'nowrap',
					ml: 5,
				}}
			>
				Become a Host
			</Link>
			<Stack>
				<Button>
					<BsGlobe size={24} />
				</Button>
				<Button
					sx={{
						borderRadius: 10,
						border: '1px solid #ddd',
					}}
				>
					<Stack
						sx={{
							display: 'flex',
							alignItems: 'center',
							p: '4px',
						}}
					>
						<AiOutlineMenu size={16} />
						<FaRegUserCircle size={24} />
					</Stack>
				</Button>
			</Stack>
		</Box>
	)
}

export default ProfileSettings
