import { useEffect, useState } from 'react';
import { getAreaData } from './api';
import { Place } from './types/Area';
import './App.css';

function App() {
	const [areas, setAreas] = useState<Place[]>([]);

	const load = async () => {
		try {
			const areaData = await getAreaData();

			areas.concat(areaData);

			setAreas(areas);
		} catch (error) {
			window.alert('todo: fix app');
		}
	};

	useEffect(() => {
		load();
	}, []);

	return (
		<div className='App'>
			<h1>Postcoders</h1>
			<h2>{`Areas for BB10: ${areas.length}`}</h2>
		</div>
	);
}

export default App;
