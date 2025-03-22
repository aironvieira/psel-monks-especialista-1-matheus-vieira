import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const CardsSection = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 20px 30px;

    & h2{
        margin-top: 0;
    }

	@media(min-width: 900px) {
		padding: 60px 40px 0;

	}
`;

const CardsDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center; 
    gap: 22px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr); 
    }

    @media (max-width: 990px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (max-width: 660px) {
        grid-template-columns: 1fr; 

        & img{
            width: 100%;
            height: 180px;
        }
    }
`;

const Card = styled.div`
    color: #2D2D2D;
    font-weight: 400;
    background: #fff;
    padding: 6px;
    width: 284px;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0px 2px 24px 0px #0000001A;

    @media (max-width: 660px) {
        width: 100%;
    }
`;

const CardTitle = styled.h4`
    color: #2D2D2D;
    font-weight: 400;
    font-size: 20px;
    padding-left: 10px;
    margin: 10px 0;

    @media (min-width: 900px) {
        font-size: 24px;
    }
`;

const CardDescription = styled.p`
    color: #2D2D2D;
    font-weight: 300;
    font-size: 16px;
    padding-left: 10px;

    @media (min-width: 900px) {
        font-size: 20px;
    }
`;

function ProductsComponent() {
    
    const [cardData, setCardData] = useState([]);

    const importImage = (imageName) => {
        try {
            return require(`../assets/images/${imageName}`);
        } catch (error) {
            console.error('Erro ao carregar a imagem:', error);
        return '';
        }
    };

    useEffect(() => {
        fetch('/data/card-data.json')
        .then(response => response.json())
        .then(data => setCardData(data))
        .catch(error => console.error('Erro ao carregar os dados:', error));
    }, []);

    return (
        <>
            <CardsSection> 
                <h2>
                    Lorem ipsum dolor sit amet consectetur
                </h2>            
                <h3>
                    Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo        
                </h3>

                <CardsDisplay>
                    {cardData.map((card) => (
                        <Card key={card.id}>
                            <img src={importImage(card.imagem)} alt={card.title} /> 
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription>{card.description}</CardDescription>
                        </Card>
                    ))}
                </CardsDisplay>

            </CardsSection>
        </>
    );
}

export default ProductsComponent;
