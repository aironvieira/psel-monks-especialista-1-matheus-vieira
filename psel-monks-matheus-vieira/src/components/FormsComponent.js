import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormImage from '../assets/images/form-image.svg';

const FormSection = styled.section`
	background-color: #2d2d2d;
	padding: 30px 20px 30px;

	@media(min-width: 900px) {
		margin-top: 30px;
		padding: 30px 40px 0;
	}

	& img{
		display: block;
		margin: 0 auto;
	}

	.forms-container {
		background-color: #eae8e4;
		border-radius: 24px;
		padding: 24px;
		margin-top: 30px;
	}

	& h2 {
		margin-top: 0;
	}

	& h3 {
		font-size: 16px;
		margin-top: 10px;
		margin-bottom: 20px;
	}

	& .forms-advice {
		font-weight: 200;
		color: #2d2d2d;
		margin-bottom: 20px;
		display: inline-block;
	}

	& .form-inputs-wrapper {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 18px;
	}

	& .forms-security {
		display: flex;
		margin: 20px 0;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		color: #2d2d2d;
		flex-wrap: wrap;
		gap: 10px;

		& .forms-random {
			background: #dfdcd5;
			display: flex;
			gap: 16px;
			padding: 10px 24px;
			border-radius: 8px;
			align-items: center;
			

			& .forms-random-number,
			& label {
				font-size: 16px;
				font-weight: 600;
			}

			& .forms-random-number {
				color: #7d26c9;
			}
		}

		& .forms-security-title{
			display: block;
			width: 100%;
			font-size: 20px;
		}

		@media(min-width: 765px) {
			justify-content: space-between;

			& .forms-security-title{
				display: inline;
				width: auto;
				font-size: 24px;
			}
			
			& .forms-random-number,
			& label {
				font-size: 20px;
				font-weight: 600;
			}
		}
	}

	@media(min-width: 940px) {
		& .forms-security{
			flex-wrap: nowrap;
		}

		& .form-inputs-wrapper {
			display: grid;
		}

		& h3 {
			font-size: 20px;
		}
	}

	@media(min-width: 1300px) {
		.forms-container{
			margin: 0;
		}
	}

`;

const Container = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	gap: 32px;
	

	@media(min-width: 1300px) {
		display: flex;
	}
`;

const Input = styled.input`
	font-family: 'Helvetica Neue';
	font-weight: 200;
	width: 100%;
	height: 42px;
	box-sizing: border-box;
	padding: 6px 10px;
	margin: 0 0 15px;
	border: 1px solid ${({ isValid }) => (isValid === false ? 'red' : 'transparent')};
	border-radius: 8px;
	font-size: 16px;
	outline: none;

	&.input-security {
		width: 95px;
		margin: 0;
	}

	@media(min-width: 940px) {
		width: 392px;
		margin: 0;

	}
`;

const Button = styled.button`
	border: none;
	display: block;
	margin: 0 auto;
	width: max-content;
	background: #dfbbfe;
	color: #2d2d2d;
	padding: 8px 40px;
	border-radius: 4px;
	font-size: 16px;
	font-weight: 600;
	text-decoration: none;
	transition: background 0.2s ease-out;
	cursor: pointer;

	&:hover {
		background: #d4b1f1;
	}

	&:disabled {
		opacity: 50%;
		cursor: not-allowed;
	}
`;

const Form = () => {
	const [input1, setInput1] = useState('');
	const [input2, setInput2] = useState('');
	const [input3, setInput3] = useState('');
	const [input4, setInput4] = useState('');

	const [input1Valid, setInput1Valid] = useState(true);
	const [input2Valid, setInput2Valid] = useState(true);
	const [securityValid, setSecurityValid] = useState(true);

	const [numSecurity1, setNumSecurity1] = useState(Math.floor(Math.random() * 999) + 1);
	const [numSecurity2, setNumSecurity2] = useState(Math.floor(Math.random() * 1000));
	const correctAnswer = numSecurity1 + numSecurity2;

	const [securityAnswer, setSecurityAnswer] = useState('');

	const [isFormValid, setIsFormValid] = useState(false); 

	const validateInput = (input, setter, validSetter) => {
		if (!input.trim()) {
			validSetter(false);
		} else {
			validSetter(true);
		}
	};

	const validateForm = () => {
		const isInput1Valid = input1.trim() !== '';
		const isInput2Valid = input2.trim() !== '';
		const isSecurityValid = parseInt(securityAnswer) === correctAnswer;

		setIsFormValid(isInput1Valid && isInput2Valid && isSecurityValid);
	};

	const handleInputChange = (e, setter, validSetter) => {
		setter(e.target.value);
		validateInput(e.target.value, setter, validSetter);
	};

	const handleSecurityAnswerChange = (e) => {
		setSecurityAnswer(e.target.value);
		setSecurityValid(parseInt(e.target.value) === correctAnswer);
	};

	useEffect(() => {
		validateForm();
	}, [input1, input2, securityAnswer]);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (isFormValid) {
			alert('Formulário enviado com sucesso!');
			setInput1('');
			setInput2('');
			setInput3('');
			setInput4('');
			setSecurityAnswer('');
		}
	};

	return (
		<FormSection>
			<Container>
				<img src={FormImage} alt="Form image" />
				<div className="forms-container">
					<h2>Lorem ipsum dolor sit amet consectetur</h2>
					<h3>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque</h3>
					<label className="forms-advice">*Lorem ipsum dolor sit amet consectetur</label>
					<form onSubmit={handleSubmit}>
						<div className="form-inputs-wrapper">
							<Input
								type="text"
								placeholder="Categoria*"
								value={input1}
								onChange={(e) => handleInputChange(e, setInput1, setInput1Valid)}
								onBlur={() => validateInput(input1, setInput1, setInput1Valid)}
								isValid={input1Valid}
							/>

							<Input
								type="text"
								placeholder="Categoria*"
								value={input2}
								onChange={(e) => handleInputChange(e, setInput2, setInput2Valid)}
								onBlur={() => validateInput(input2, setInput2, setInput2Valid)}
								isValid={input2Valid}
							/>

							<Input
								type="text"
								placeholder="Categoria"
								value={input3}
								onChange={(e) => setInput3(e.target.value)}
							/>

							<Input
								type="text"
								placeholder="Categoria"
								value={input4}
								onChange={(e) => setInput4(e.target.value)}
							/>
						</div>
						<div className="forms-security">
							<label className='forms-security-title'>Verificação de Segurança</label>

							<div className="forms-random">
								<label className="forms-random-number">{numSecurity1}</label>
								<label>+</label>
								<label className="forms-random-number">{numSecurity2}</label>
							</div>

							<label>=</label>

							<Input
								className="input-security"
								type="text"
								placeholder="Resultado*"
								value={securityAnswer}
								onChange={handleSecurityAnswerChange}
								onBlur={() => setSecurityValid(parseInt(securityAnswer) === correctAnswer)}
								isValid={securityValid}
							/>
						</div>

						<Button type="submit" disabled={!isFormValid}>Lorem Ipsum</Button>
					</form>
				</div>
			</Container>
		</FormSection>
	);
};

export default Form;
