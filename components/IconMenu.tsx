import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import binance from './../assets/icon/binance.png';
import binanceFutures from './../assets/icon/binanceFutures.png';
import binanceMargin from './../assets/icon/binanceMargin.png';
import bitmex from './../assets/icon/bitmex.png';
import bybit from './../assets/icon/bybit.png';
import ftx from './../assets/icon/ftx.png';
import hitbtc from './../assets/icon/hitbtc.png';
import okex from './../assets/icon/okex.png';
import Image from 'next/image'
import React from 'react'

const IconMenu = () =>{
	return (
		<Box sx={{position:'absolute', width:'100%', height: {xl: '20%', lg: '20%', md: '20%', xs: '20%'}, top: {xs: '115%', lg: '83%', xl: '75%', md: '75%', sm: '75%'}, zIndex: 2, overflow: 'hidden'}}>
			<Grid maxWidth="xl" container sx={{width : '100%', margin: 'auto'}} alignItems='center' justifyContent='center' rowSpacing={{xs: 0, md: 2, lg: 0, xl: 0}}>
				<Grid container item xs={3.5} md={2} spacing={2} justifyContent='center'>
					<Grid item xs={12}><Box sx={{justifyContent: 'center', display: 'flex'}}><Image src={binance}/></Box></Grid>
					<Grid item xs={6}><Box sx={{justifyContent: 'flex-end', display: 'flex'}}><Image src={binanceFutures}/></Box></Grid>
					<Grid item xs={6}><Box sx={{justifyContent: 'flex-start', display: 'flex'}}><Image src={binanceMargin}/></Box></Grid>
				</Grid>
				<Grid item xs={3.5} md={1.5}>
					<Box sx={{justifyContent: 'center', display: 'flex'}}><Image src={bybit}/></Box>
				</Grid>
				<Grid item xs={3.5} md={1.5}>
					<Box sx={{justifyContent: 'center', display: 'flex'}}><Image src={okex}/></Box>
				</Grid>
				<Grid item xs={3.5} md={1.5}>
					<Box sx={{justifyContent: 'center', display: 'flex'}}><Image src={ftx}/></Box>
				</Grid>
				<Grid item xs={3.5} md={1.5}>
					<Box sx={{justifyContent: 'center', display: 'flex'}}><Image src={bitmex}/></Box>
				</Grid>
				<Grid item xs={3.5} md={1.5}>
					<Box sx={{justifyContent: 'center', display: 'flex'}}><Image src={hitbtc}/></Box>
				</Grid>
			</Grid>
		</Box>
	)
}

export default IconMenu
