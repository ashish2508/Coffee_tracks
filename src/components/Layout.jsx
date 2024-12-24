import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Authentication from "./Authentication";
import Modal from "./Modal";
export default function Layout(props) {
	const { children } = props;
	const [showModal, setShowModal] = useState(false);
	const { globalUser, logout } = useAuth();
	const header = (
		<header>
			<div className="">
				<h1 className="text-gradient">CAFFIEND</h1>
				<p>For Coffee Adects :)</p>
			</div>
			{globalUser ? (
				<button onClick={logout}>
					<p>Log Out</p>
				</button>
			) : (
				<button
					onClick={() => {
						setShowModal(true);
					}}
				>
					<p> Sign Up free</p>
					<i className="fa-solid fa-mug-hot"></i>
				</button>
			)}
		</header>
	);

	const footer = (
		<footer>
			<p>
				<span className="text-gradient">Caffiend</span> was made by
				<a
					href="https://github.com/ashish2508/Coffee_tracks"
					target="_blank"
					title="For github link click on the Name here :]"
				>
					{" "}
					Ashish Jha
				</a>
			</p>
		</footer>
	);
  function handleCloseModal() {
    setShowModal(false)
  }
	return (
		<>
			{showModal && (
				<Modal handleCloseModal={handleCloseModal}>
					<Authentication
						handleCloseModal={handleCloseModal}
					/>
				</Modal>
			)}
			{header}
			<main>{children}</main>
			{footer}
		</>
	);
}
