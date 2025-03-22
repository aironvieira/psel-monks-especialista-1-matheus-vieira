import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import HeroLPComponent from './components/HeroLPComponent';
import ProductsComponent from './components/ProductsComponent';
import SimpleGalleryComponent from './components/SimpleGalleryComponent';
import AppSectionComponent from './components/AppSectionComponent';
import ProductsCategoriesComponent from './components/ProductsCategoriesComponent';
import CardsComponent from './components/CardsComponent';
import FormsComponent from './components/FormsComponent';
import FooterComponent from './components/FooterComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

const BackgroundContainer = styled.div`
	background: #EAE8E4;

`;

root.render(
	<React.StrictMode>
		<BackgroundContainer>
			<HeroLPComponent />
			<ProductsComponent />
			<SimpleGalleryComponent />
			<AppSectionComponent />
			<ProductsCategoriesComponent />
			<CardsComponent />
			<FormsComponent />
			<FooterComponent />
		</BackgroundContainer>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
