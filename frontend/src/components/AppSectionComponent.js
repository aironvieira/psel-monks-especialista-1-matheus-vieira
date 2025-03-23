import PlayStore from '../assets/icons/play-store.png';
import AppleStore from '../assets/icons/apple-store.png';
import styled from 'styled-components';

const Container = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	display: flex;

    padding: 30px 20px 30px;

	@media(min-width: 900px) {
		padding: 60px 40px 0;

	}
`;

const AppSection = styled.div`
	display: block;
	grid-template-columns: 1fr auto;
    place-items: center;
	gap: 40px;
    background: #3C0C60;
    border-radius: 24px;
    padding: 20px;

    & h2, & h3{
        color: #EAE8E4;
        margin: 0;
    }

    & h2{
        margin-bottom: 10px;
    }

    & h3{
        margin-bottom: 40px;
    }

    .apps-images{
        width: max-content;
        img{
            display: block;
        }

        .play-store{
            margin-bottom: 8px;
        }
    }

	@media(min-width: 900px) {
        display: grid;
        padding: 40px;

        & h3{
            margin-bottom: 0px;
        }
	}
`;


function AppSectionComponent() {
	return (
		<>
			<Container>
				<AppSection>
                    <div>
                        <h2>Lorem ipsum dolor sit amet consectetur</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra</h3>
                    </div>
                    <div className='apps-images'>
                        <a href="#">
                            <img className='play-store' alt="play-store" src={PlayStore}/>
                        </a>
                        <a href='#'>
                            <img alt="apple-store" src={AppleStore}/>
                        </a>
                    </div>
                </AppSection>
			</Container>
		</>
	);
}

export default AppSectionComponent;
