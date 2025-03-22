import Logo from '../assets/images/logo.svg';
import Scroll from '../assets/images/scroll.svg';
import Menu from '../assets/icons/menu.svg';
import CloseMenu from '../assets/icons/close-menu.svg';
import Hero from '../assets/images/hero.png';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	display: flex;
	padding: 0 20px;

	@media(min-width: 900px) {
		padding: 0 40px;

	}
`;

const HeroContainer = styled.section`
	display: flex;
	overflow: hidden;
	justify-content: space-between;
	border-bottom-left-radius: 30px; 
	border-bottom-right-radius: 30px; 
	background: #2D2D2D;
	color: #EAE8E4;
	border: solid 1px transparent;
`;

const Header = styled.header`
	display: flex;
	padding: 18px 0px;
	gap: 20px;
	position: relative;
`;

const HeroContent = styled.div`
	max-width: 780px;

	& h3{
		color: #EAE8E4;
	}
`;


const LogoImage = styled.img`
	display: flex;
	background: #2D2D2D;
	width: 140px;
	height: 24px;
`;

const HeroImage = styled.img`
	display: flex;
	background: #2D2D2D;
`;

const ScrollSvg = styled.img`
	display: block;
	margin: 60px auto 0;
`;

const NavDesk = styled.nav`
  	display: none;

	@media(min-width: 900px) {
		display: flex;
	}
`;

const NavLink = styled.a`
	color: white;
	text-decoration: none;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	width: 140px;
	text-align: center;
	z-index: 1;

	&:hover {
	color: #f0f0f0;
	}
`;

const MenuIcon = styled.img`
	display: block;
	cursor: pointer;

	@media(min-width: 900px) {
		display: none;
	}
`;


const MenuMobile = styled.div`
	&.hidden{
		top: -120vh;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0px;
	left: 0;
	background: #DFBBFE;
	transition: top 0.2s ease-out;
	padding-bottom: 40px;

	& .menu-mobile-content{
		width: 100%;
	}

	& .close-menu{
		margin-bottom: 40px;
	}

	& a, & li{
		color: #2D2D2D;
		text-decoration: none;
		font-size: 22px;
		font-weight: 500;
		margin-bottom: 20px;

	}

	& ul{
		margin-left: 20px;
	}

	header{
		width: 100%;
		padding: 18px 20px;
		background: #2d2d2d;
	}

	@media(min-width: 900px) {
		display: none;
	}
`;

function HeroLPComponent() {
	const [menuMobile, setMenuMobile] = useState(false);

	return (
		<>
			<HeroContainer>
				<Container>

					<div>
						<Header>
							<LogoImage src={Logo} alt="Logo da Empresa" />
							<NavDesk>
								<NavLink href="#">Categoria 1</NavLink>
								<NavLink href="#">Categoria 2</NavLink>
								<NavLink href="#">Categoria 3</NavLink>
								<NavLink href="#">Categoria 4</NavLink>
							</NavDesk>
							<MenuIcon alt='Open menu mobile' src={Menu} onClick={() => { setMenuMobile(!menuMobile); }}/>
						</Header>
						<MenuMobile className={menuMobile ? "s": "hidden"} > 
							<div className='menu-mobile-content'>
								<Header>
									<LogoImage src={Logo} alt="Logo da Empresa" />
									<MenuIcon className='' src={Menu} onClick={() => { setMenuMobile(!menuMobile); }}/>
								</Header>
								<ul>
									<li><a href="#"> Categoria 1 </a></li>
									<li><a href="#"> Categoria 2 </a></li>
									<li><a href="#"> Categoria 3 </a></li>
									<li><a href="#"> Categoria 4 </a></li>
								</ul>
							</div>
							<img className='close-menu' src={CloseMenu} width={58} height={84} onClick={() => { setMenuMobile(false); }}/>
						</MenuMobile>
						<HeroContent>
							<h1>
								Lorem ipsum dolor sit amet consectetur
							</h1>
							<h3>
								Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra
							</h3>
						</HeroContent>
						<ScrollSvg src={Scroll} />
					</div>

					<HeroImage src={Hero} alt="Hero image" />
				</Container>

			</HeroContainer>

		</>
	);
}

export default HeroLPComponent;
