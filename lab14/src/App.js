import React from 'react';
import './reset.css';
import 'leaflet/dist/leaflet.css';
import MapComponent from './MapComponent';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export default function App() {
	return (
		<>
			<MapComponent />
		</>
	);
}
