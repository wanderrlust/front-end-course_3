import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<MapContainer
				center={[46.8376, 33.41878]}
				zoom={13}
				style={{ height: '100%', width: '100%' }}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>

				<Marker position={[46.836138, 33.424187]}>
					<Popup>Це гарне місце у парку міста Берислав</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapComponent;
