import type { NextPage } from 'next'
import { styled } from '@mui/system';
import Image from 'next/image'
import bg from './../assets/img/bg.png';
import Box from '@mui/material/Box';
import Navbar from '../components/responsiveAppBar';
import Carusel from '../components/Carusel';
import Content from '../components/Content';
import IconMenu from '../components/IconMenu';

const Container = styled(Box)({
	position: 'relative',
	height: '100vh',
  backgroundColor: '#101C2B',
	overflow: 'scroll'
});

const Img = styled(Image)({
	
	

});


const Home: NextPage = () => {
	return (
			<Container>
				<Navbar/>
				<Carusel />
				<Content/>
				<IconMenu/>
				<Box sx={{position:'absolute', width:'100%', height: {xl: '55%', lg: '47%', md: '40%', xs: '35%'}, top: {xs: '95%', lg: '40%', md: '50%', sm: '56%'}, zIndex: 1, overflow: 'hidden'}}>
					<Box style={{width: '100%', height: '100%', position: 'relative'}}>
						<Img layout="fill" objectFit='cover' objectPosition={'42% 0px'} src={bg} width={'100vw'} height={'100vh'}/>
					</Box>
				</Box>
			</Container>
	)
}

export default Home