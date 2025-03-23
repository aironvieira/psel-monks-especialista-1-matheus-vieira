import styled from 'styled-components';
import Instagram from '../assets/icons/instagram.svg'
import Whatsapp from '../assets/icons/whatsapp.svg'
import Twitter from '../assets/icons/twitter.svg'
import Facebook from '../assets/icons/facebook.svg'

const Footer = styled.section`
    background-color: #2d2d2d;
    padding: 30px 20px 30px;

	@media(min-width: 900px) {
		padding: 60px 40px 60px;

	}
`;

const Container = styled.div`
    padding-top: 40px;
    border-top: solid 1px #DFBBFE;
	margin: 0px auto 0;
	max-width: 1200px;
    text-align: center;
    color: #EAE8E4;

    & img{
        margin-bottom: 40px;
    }
    
    & .d-flex{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    & h4{
        margin-top: 0;
    }

    & a{
        font-weight: 200;
        display: inline-block;
        color: #EAE8E4;
        text-decoration: none;
    }
`;


function CardsComponents() {


	return (
		<>
            <Footer>
                <Container>
                    <div className='d-flex'>
                        <a href="#">
                            <img src={Instagram}/>
                        </a>
                        <a href="#">
                            <img src={Whatsapp}/>
                        </a>
                        <a href="#">
                            <img src={Twitter}/>
                        </a>
                        <a href="#">
                            <img src={Facebook}/>
                        </a>
                    </div>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <div className='d-flex'>
                        <a href="#">Lorem ipsum</a>
                        <a href="#">Lorem ipsum</a>
                        <a href="#">Lorem ipsum</a>
                        <a href="#">Lorem ipsum</a>
                    </div>
                
                </Container>
            </Footer>
		</>
	);
}

export default CardsComponents;
