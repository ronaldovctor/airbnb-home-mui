import { Box, Button, MobileStepper, Typography } from '@mui/material'
import React, { useState } from 'react'
import {
	carouselDot,
	carouselImage,
	dFlex,
	fixedBottom,
	fixedIcon,
	flexBetween,
} from '../themes/commonStyles'
import { FaRegHeart } from 'react-icons/fa'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import './CarouselCard.css'

function CarouselCard({ location }) {
	const [activeStep, setActiveStep] = useState(0)
	const maxSteps = location.locationImages.length

	const handleStepChange = (step) => {
		setActiveStep(step)
	}

	return (
		<Box
			className="carouselCard"
			sx={{
				flex: 1,
				position: 'relative',
			}}
		>
			<Box sx={fixedIcon}>
				<FaRegHeart size={24} color="red" />
			</Box>

			<Swiper
				navigation={true}
				pagination={true}
				slidesPerView={1}
				modules={[Navigation, Pagination]}
				onSlideChange={(swiper) => handleStepChange(swiper.activeIndex)}
			>
				{location.locationImages.map((step) => (
					<SwiperSlide key={step.id}>
						<Box
							component="img"
							sx={carouselImage}
							src={step.url}
							alt={step.id}
						></Box>
					</SwiperSlide>
				))}
			</Swiper>

			<Box sx={flexBetween}>
				<Box sx={{ mt: 2 }}>
					<Typography
						component="h3"
						sx={{
							fontWeight: 'bold',
						}}
					>
						{location.location}
					</Typography>
					<Typography component="h4">{location.days}</Typography>
					<Typography
						component="h5"
						sx={{
							fontWeight: 'bold',
						}}
					>
						{location.price}
					</Typography>
				</Box>
				<Box sx={{ mt: 2 }}>
					<Box sx={dFlex}>
						{location.isNew ? (
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<AiFillStar />
								<Typography component="h5">New</Typography>
							</Box>
						) : (
							<>
								<AiFillStar />
								<Typography component="h5">{location.rating}</Typography>
							</>
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default CarouselCard
