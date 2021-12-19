import React from 'react';
import slide from './../assets/img/slide.png'
import Image from 'next/image'
import { Box, styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel';


const Img = styled(Image)({
	width: '100%',
	height: '100%',
});

const Wrap = styled(Box)({
	position: 'absolute',
	right: 0,
	zIndex: 0,
});

const Slider = styled(Carousel)({
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	position: 'relative',
});

const Slide = styled(Box)({
	position: 'relative',
});

const images = [<Img layout="fill" objectFit='cover' objectPosition={'72% 0px'} src={slide}/>, <Img layout="fill" objectFit='cover' objectPosition={'72% 0px'} src={slide}/>, <Img layout="fill" objectFit='cover' objectPosition={'72% 0px'} src={slide}/>];

const Carusel = () => {
	return (
		<Wrap sx={{width: {xl: '76.3%', lg: '76%', xs: '100%', md: '100%'}, height: {xl: '71.5%', lg: '70%',md: '60%', xs: '43%'}, top: {lg: 0, md: '10%', sm: '35%', xs: '70%'}}}>
			<Slider
				interval={10000}
				duration={1500}
				IndicatorIcon={<Box/>}
				indicatorIconButtonProps={{
					style: {
						background: 'rgba(16, 28, 43, 0.1)',
						border: '1px solid #C49BFF',
						borderRadius: 0,
						boxSizing: 'border-box',
						boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)',
						transform: 'rotate(45deg)',
						padding: 6,
						marginRight: '20px',
					}
				}}
				activeIndicatorIconButtonProps={{
					style: {
						background: '#C49BFF',
					}
				}}
				indicatorContainerProps={{
					style: {
							padding: 4,
							position: 'absolute',
							zIndex: 10,
							top: '87.7%',
							transform: 'translateY(-50%)',
							left: '32%',
							width: '115px',
							height: '30px',
							textAlign: 'center',
					}
				}}	
			>
				{
					images.map((image, i) => (
						<Slide key={i} sx={{width: {xs: '100vw', lg: '80vw'}, height: {md: '75vh', xs: '50vh', lg: '85vh'},}}>
							{image}
						</Slide>
					))
				}
			</Slider>
		</Wrap>
	)
}

export default Carusel