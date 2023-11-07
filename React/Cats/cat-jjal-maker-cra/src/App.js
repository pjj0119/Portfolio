import React from 'react';
import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import jsonLocalStorage from "./components/JsonLocalStorage";
import fetchCat from "./components/FetchCat";
import Favorites from "./components/Favorites";
import MainCard from "./components/MainCard";

const App = () =>{
	// const CAT1 ="https://cataas.com/cat/HSENVDU4ZMqy7KQ0/says/react";
	// const CAT2 ="https://cataas.com/cat/BxqL2EjFmtxDkAm2/says/inflearn";
	// const CAT3 ="https://cataas.com/cat/18MD6byVC1yKGpXp/says/JavaScript";

	const [counter,setCounter] = React.useState(()=>{
		return jsonLocalStorage.getItem('counter')
	});
	const [mainCat,setMainCat] = React.useState();
	const [favorites,setFavorites] = React.useState(()=>{
		return jsonLocalStorage.getItem('favorites') || []
	});

	
	const alreadyFavorite = favorites.includes(mainCat);

	async function setInitialCat(){
		const newCat = await fetchCat('First Cat');
		setMainCat(newCat);
	}

	React.useEffect(()=>{
		setInitialCat()
	},[]);

	async function updateMainCat(value){;

		const newCat = await fetchCat(value);

			setMainCat(newCat);
			setCounter((prev) => {
				const nextCounter = prev + 1
				jsonLocalStorage.setItem('counter', nextCounter)
				return nextCounter;
			})
	}

	function handleHeartClick(){
		const nextFavorites =[...favorites, mainCat];
		setFavorites(nextFavorites)
		jsonLocalStorage.setItem('favorites', nextFavorites)
	}

	const counterTitle = counter === null ? "" : counter + "번째 ";

	return(
		<div>
			<Title>{counterTitle}고양이 가라사대</Title>
			<Form updateMainCat = {updateMainCat}/>
			<MainCard img={mainCat} onHeartClick = {handleHeartClick} alreadyFavorite = {alreadyFavorite} />
			<Favorites favorites = {favorites}/>
		</div>
	)
};


export default App;
