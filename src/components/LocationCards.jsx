import React, { useState } from 'react'
import { Grid, Box } from '@mui/material'
import { locations as cardLocations } from '../data/mock-data'
import CarouselCard from './CarouselCard'

function LocationCards() {
	const [cards] = useState(cardLocations)

	if (!cards.length) return null

	return (
		<Box sx={{ mx: 2 }}>
			<Grid container rowSpacing={3} columnSpacing={3} justifyContent={'center'}>
				{cards.map((location) => (
					<Grid item key={location.id} xs={6} sm={4} md={4} lg={3}>
						<CarouselCard location={location} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default LocationCards
