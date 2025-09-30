import {
	MapContainer,
	TileLayer,
	Polyline,
	Marker,
	Popup,
	useMap,
} from "react-leaflet"
import L, { DivIcon } from "leaflet"
import "leaflet/dist/leaflet.css"
import React from "react"

export type LatLngTuple = [number, number]

const route: LatLngTuple[] = [
	[-6.175392, 106.827153], // Monas (A)
	[-6.19012, 106.82181],
	[-6.2019, 106.8209],
	[-6.20876, 106.8219],
	[-6.2186, 106.8024], // GBK (B)
]
const start: LatLngTuple = route[0]
const end: LatLngTuple = route[route.length - 1]
// Use CSS variables for theme colors
const primary = "var(--primary)"
const card = "var(--card)"
const cardFg = "var(--card-foreground)"
const accent = "var(--accent)"
const border = "var(--border)"
const polylineOptions = { color: primary, weight: 7, opacity: 0.95 }

// Custom SVG marker icon using theme color
const markerSvg = encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' width='32' height='41' viewBox='0 0 32 41' fill='none'>
	<ellipse cx='16' cy='13' rx='12' ry='12' fill='${primary}' stroke='${border}' stroke-width='2'/>
	<circle cx='16' cy='13' r='5' fill='${accent}'/>
	<path d='M16 41C16 41 28 25.5 28 17C28 8.71573 22.2843 3 16 3C9.71573 3 4 8.71573 4 17C4 25.5 16 41 16 41Z' fill='${primary}' stroke='${border}' stroke-width='2'/>
</svg>`)
const markerIcon = new DivIcon({
	html: `<img src="data:image/svg+xml,${markerSvg}" style="display:block;" alt="marker" />`,
	iconSize: [32, 41],
	iconAnchor: [16, 41],
	className: "custom-leaflet-marker",
})

// Custom popup styling using theme
function ThemedPopup({ children }: { children: React.ReactNode }) {
	return (
		<Popup>
			<div
				style={{
					background: card,
					color: cardFg,
					border: `1.5px solid ${border}`,
					borderRadius: 12,
					padding: 10,
					fontWeight: 500,
					boxShadow: "0 2px 12px 0 rgba(0,0,0,0.08)",
				}}
			>
				{children}
			</div>
		</Popup>
	)
}

// Optional: Overlay for a modern look
function MapOverlay() {
	return (
		<div
			style={{
				position: "absolute",
				top: 16,
				left: 16,
				zIndex: 1000,
				background: "rgba(255,255,255,0.85)",
				color: "var(--primary)",
				borderRadius: 8,
				padding: "6px 16px",
				fontWeight: 600,
				fontSize: 16,
				boxShadow: "0 2px 8px 0 rgba(0,0,0,0.06)",
				border: `1.5px solid ${border}`,
			}}
		>
			Jakarta Marathon Route
		</div>
	)
}

export default function MarathonMap() {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				position: "relative",
				borderRadius: "var(--radius-lg)",
				overflow: "hidden",
				boxShadow: "0 4px 32px 0 rgba(0,0,0,0.08)",
			}}
		>
			<MapOverlay />
			<MapContainer
				center={[-6.2, 106.82]}
				zoom={13}
				scrollWheelZoom={true}
				style={{ width: "100%", height: "100%", background: "var(--card)" }}
			>
				<TileLayer
					attribution="&copy; OpenStreetMap contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Polyline positions={route} pathOptions={polylineOptions} />
				<Marker position={start} icon={markerIcon}>
					<ThemedPopup>Start: Monas</ThemedPopup>
				</Marker>
				<Marker position={end} icon={markerIcon}>
					<ThemedPopup>Finish: GBK</ThemedPopup>
				</Marker>
			</MapContainer>
		</div>
	)
}
