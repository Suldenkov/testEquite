import { Grid, Typography } from '@mui/material'
import { Btn } from '../components/styled';
import Box from '@mui/material/Box';
import React from 'react'

const Content = () => {
	return (
		<Box sx={{position: 'absolute', width: '100%', height: '100%', zIndex: 2, top: 0}}>
			<Grid maxWidth="xl" container sx={{paddingTop: {xs: '118px', sm: '118px', md: '149px'}, width: {xl: '72%', xs: '100%', sm: '88%'}, margin: 'auto', zIndex: 2}}>
				<Grid item xs={12} container>
					<Grid item sm={12} lg={6}>
						<Box sx={{textAlign: {xs:'center', sm: 'center', lg: 'left'}}}>
							<Typography variant="h5" component="div" sx={{fontWeight: 'bold',color: '#FFFFFF',fontSize: {xs: '30px', sm: '30px', lg: '50px'}, lineHeight: {xs: '40px', sm: '40px', lg: '60px'}}}>Поделитесь своими результатами</Typography>
						</Box>
						<Box sx={{width: {xl: '89%', lg: '95%'}, margin: {xs: 'auto', sm: 'auto', lg: '0'}, textAlign: {xs: 'center', sm: 'center', lg: 'left'}}}>
							<Typography variant="body1" component="div" sx={{margin: '40px 0',color:'#AE8DE5',textTransform: 'uppercase',letterSpacing: '0.03em',fontWeight: 300,fontSize: {xs: '20px', sm: '20px', lg: '35px'}, lineHeight: {xs: '30px', sm: '30px', lg: '50px'}}}>И получите доверие большого количества инвесторов</Typography>
						</Box>
						<Box sx={{display: 'flex', justifyContent: {xs: 'center', sm: 'center', lg: 'flex-start'}, flexWrap: 'wrap'}}>
							<Btn sx={{mt:2, width: '187px',height: '50px', background: '#5040B2',boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)', color: 'white', display: {md: 'flex' }}}>Начать</Btn>
							<Btn sx={{mt:2, width: '187px',height: '50px', border: '1px solid #C49BFF', boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)', display: { md: 'flex' }}}>Я трейдер</Btn>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Content
