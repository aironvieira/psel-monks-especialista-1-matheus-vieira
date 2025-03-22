import City1Image from '../assets/images/city-1.png';
import City2Image from '../assets/images/city-2.png';
import City3Image from '../assets/images/city-3.png';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	margin: 0 auto;
	max-width: 1200px;
    padding: 30px 20px 30px;

	@media(min-width: 900px) {
		padding: 60px 40px 0;

	}
`;

const Gallery = styled.section`
	display: block;
	width: 100%;
	grid-template-columns: repeat(2, 1fr); 
	gap: 20px;

	
	@media(min-width: 900px) {
		display: grid;
	}
`;

// Estilo para a .div1
const Col1 = styled.div`
	& h2{
		margin-top: 6px;
	}

	& img{
		width: 300px;
		height: 300px;
		border-radius: 24px;
		box-shadow: 0px 4px 8px 0px #00000029;
		display: block;
		margin: 0 auto 20px;
	}
		
	@media(min-width: 900px) {
		& img{  
			width: 100%;
			height: 525px;
			margin: 0;
		}
	}
	
`;

// Estilo para a .div2
const Col2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& img{
		display: block;
		box-shadow: 0px 4px 8px 0px #00000029;
		margin: 0;
		border-radius: 24px;
		width: 300px;
		height: 200px;
		display: block;
		margin: 0 auto 20px;
	}
	
	& img:last-child{
		margin: 0 auto 0px;
	}
			
	@media(min-width: 900px) {
		& img{
			width: 100%;
			height: 346.5px;
			margin: 0;
		}
	}
`;

function SimpleGalleryComponent() {
	return (
		<>
			<Container>
				<Gallery>
					<Col1>
						<h2>
						Lorem ipsum dolor sit amet consectetur
						</h2>
						<h3>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo</h3>
						<img src={City1Image} alt="Image of a city"/>
					</Col1>
					<Col2>
						<img src={City2Image} alt="Image of a city"/>
						<img src={City3Image} alt="Image of a city"/>
					</Col2>
				</Gallery>
			</Container>
		</>
	);
}

export default SimpleGalleryComponent;
