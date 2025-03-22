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

const CategoriasSection = styled.section`
    & .list-categories{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }

    & h2{
        margin: 0 0 20px;
    }

    & a {
        background: #DFDCD5;
        color: #7D26C9;
        border: solid 1px #7D26C9;
        padding: 8px 40px;
        border-radius: 32px;
        font-size: 20px;
        text-decoration: none;
        transition: background 0.2s ease-out;

        &:hover{
            background: #7d26c957;
        }
    }
        
    @media (min-width: 900px) {
        & h2{
            margin: 0 0 40px;
        }
    }
`;

function ProductsCategoriesComponent() {

    const listaCategorias = ["Perfumaria", "Corpo e banho", "Hidratante", "Desodorante", "Cabelos", "Maquiagem", "Rosto", "Casa", "Infantil", "Shampoo", "Sabonete", "Body splash", "Óleo corporal", "Corretivo", "Proteção solar"];

	return (
		<>
			<Container>
				<CategoriasSection>
                    <h2>Lorem ipsum dolor sit amet consectetur</h2>
                    
                    <div className='list-categories'>
                        {
                            listaCategorias.map((categoria, index) => (
                                <a href="/" key={index}>{categoria}</a>
                            ))
                        }
                    </div>
                </CategoriasSection>
			</Container>
		</>
	);
}

export default ProductsCategoriesComponent;
