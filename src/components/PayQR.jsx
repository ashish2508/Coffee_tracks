import { useEffect, useState } from "react";

export default function PayQR() {
	const [showQR, setShowQR] = useState(false);

	const handleKeyDown = (e) => {
		if (e.key === "Escape") {
			setShowQR(false);
		}
	};

	useEffect(() => {
		if (showQR) {
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
		}
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [showQR]);

	return (
		<div>
			<button
				style={{
					position: "fixed",
					bottom: "20px",
					right: "20px",
					padding: "10px 20px",
					background: "black",
					color: "#fff",
					border: "none",
					borderRadius: "5px",
					cursor: "pointer",
				}}
				onClick={() => setShowQR(true)}
			>
				Show QR Code
			</button>

			{showQR && (
				<div
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundColor: "rgba(0, 0, 0, 0.7)",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 1000,
					}}
					onClick={() => setShowQR(false)}
				>
					<div
						style={{
							background: "transparent",
							padding: "20px",
							borderRadius: "10px",
							boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
							textAlign: "center",
							position: "relative",
						}}
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src="/pay.jpg"
							alt="QR Code"
							style={{
								width: "400px",
								height: "400px",
								borderRadius: "10px",
								marginBottom: "10px",
                background:"transparent"
							}}
						/>
						<button
							style={{
								marginTop: "10px",
								padding: "5px 10px",
								background: "black",
								color: "whitesmoke",
								border: "none",
								borderRadius: "5px",
								cursor: "pointer",
                width:"15%"
							}}
							onClick={() => setShowQR(false)}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
