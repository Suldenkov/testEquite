import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import Image from 'next/image'
import logoImg from './../assets/icon/logo.png'
import { Btn } from './styled'


const pages = ['Главная', 'Рейтинг', 'Блог', 'Pro', 'Инвестору'];

const Nav = styled(AppBar)({
  background: 'none',
  boxShadow: 'none',
});

const Logo = styled(Image)({
	width: '48px',
	height: '56px',
});

const PageTitle = styled(Button)({
	fontWeight: 500,
	fontSize: '14px',
	lineHeight: '13px',
	letterSpacing: '4px',
	textTransform: 'uppercase',
	textAlign: "center",
})

const Navbar = () => {
	const [selectPage, setSelectPage] = React.useState('Инвестору')
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = (e: any) => {
		setSelectPage(e.target.value)
    setAnchorElNav(null);
  }


  return (
    <Nav position="fixed">
      <Container maxWidth="xl" sx={{width: {xs: '100%', xl: '73%', sm: '90%'}, padding: {sm: 0, lg: '20px'}}}>
        <Toolbar disableGutters sx={{width: '100%'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: {xs: 'flex', md: 'none', lg: 'flex'}}}
          >
            <Logo src={logoImg}/>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            EQUITE.IO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
							const active =  {background: '#101C2B',border: '1px solid #EEE4FF',boxSizing: 'border-box',borderRadius: '5px', padding: '15px 49px'}
							
							return (
              <PageTitle
                key={page}
                onClick={handleCloseNavMenu}
								value={page}
                sx={[{ my: 2, color: 'white', display: 'block', marginRight: '19px', }, page === selectPage && active]}
              >
                {page}
              </PageTitle>
            )})}
          </Box>
					<Box sx={{display: 'flex', alignItems: 'center'}}>
						<Btn sx={{background: {xs: '#162537', lg: '#101C2B'}}}>RU</Btn>
						<Btn sx={{width: '108px', border: '1px solid #C49BFF', display: { xs: 'none', md: 'flex' }}}>Войти</Btn>
						<Btn sx={{width: '108px', background: '#5040B2',boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)', color: 'white', display: { xs: 'none', md: 'none', lg: 'flex' }}}>Начать</Btn>
						<Box sx={{ width: 40, height: 40, display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center', color: '#C49BFF', background: '#101C2B', border: '1px solid #C49BFF', boxSizing: 'border-box', borderRadius: '5px' }}>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography>{page}</Typography>
									</MenuItem>
								))}
							</Menu>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon fontSize='large'/>
							</IconButton>
						</Box>
					</Box>
        </Toolbar>
      </Container>
    </Nav>
  );
};

export default Navbar;