const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			delFavorite: (char) => {
				let aux = getStore().favorites.filter(el => el != char)
				setStore({ favorites: aux })
			},
			addRemoveFav: (char) => {
				if (getStore().favorites.length > 0) {
					getStore().favorites.includes(char) ? getActions().delFavorite(char)
						: setStore({ favorites: [...getStore().favorites, char] })
				} else {
					setStore({ favorites: [char] })
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://rickandmortyapi.com/api/character").then(resp => resp.json()).then(data => setStore({ characters: data.results })).catch(error => console.log(error))
			},
			loadSingleCharacter: (id) => {
				fetch("https://rickandmortyapi.com/api/character/" + id).then(resp => resp.json())
					.then(data =>
						setStore({ singleCharacter: data })
					)
					.catch(error => console.log(error))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
