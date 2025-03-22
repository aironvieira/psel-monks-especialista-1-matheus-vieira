//To do: pegar as categorias pré cadastradas do back end

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

const Cards = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 36px;
    place-items: center;
    margin: 0 auto;
    
    @media (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr); 
    }
`;

const Card = styled.div`
    border: 2px solid #DFBBFE;
    box-shadow: 0px 2px 24px 0px #0000001A;
    border-radius: 16px;
    padding: 24px;
    width: 312px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;

    & h3{
        font-weight: 500;
        margin-bottom: 0;
        font-size: 20px;

    }

    & p{
        font-size: 16px;
        font-weight: 200;
        line-height: 30px;
        margin-top: 16px;
    }
    
    & a{
        display: block;
        margin: 0 auto;
        width: max-content;
        background: #DFBBFE;
        color: #2D2D2D;
        padding: 10px 40px;
        border-radius: 4px;
        font-size: 16px;
        text-decoration: none;
        transition: background 0.2s ease-out;

        &:hover{
            background: #d4b1f1;
        }
    }

    @media (min-width: 900px) {
        width: 375px;
        
        & h3{
            font-size: 24px;
        }
        
        & p{
            font-size: 20px;
            font-weight: 200;
            line-height: 30px;
            margin-top: 16px;
        }
    }

`;

function CardsComponents() {

    const listaCards = [
        {
            "id": 1,
            "title": "Lorem ipsum dolor1",
            "description": "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.",
            "buttonText": "Lorem Ipsum"
        },
        {
            "id": 2,
            "title": "Lorem ipsum dolor1",
            "description": "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing f sit scelerisque quis commodo aenean viverra.",
            "buttonText": "Lorem Ipsum"
        },
        {
            "id": 3,
            "title": "Lorem ipsum dolor1",
            "description": "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelrra.",
            "buttonText": "Lorem Ipsum"
        }

    ];

	return (
		<>
			<Container>
				<Cards>
                    {
                        listaCards.map((card) => (
                            <Card>
                                <div>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>
                                <a href="#" key={card.id}>{card.buttonText}</a>
                            </Card>
                        ))
                    }
                </Cards>
			</Container>
		</>
	);
}

export default CardsComponents;
