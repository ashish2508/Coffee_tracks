export default function Layout(props) {
	const { children } = props;

	const header = (
		<header>
			<div className="">
				<h1 className="text-gradient">CAFFIEND</h1>
				<p>For Coffee Adects :)</p>
			</div>
			<button>
				Sign Up free
				<i className="fa-solid fa-mug-hot"></i>
			</button>
		</header>
	);

	const footer = (
		<footer>
			<p>
				<span className="text-gradient">Caffiend</span> was made by
				<a href="https://github.com/ashish2508"> Ashish Jha </a>
				 👈🏻(this guy got help)
			</p>
		</footer>
	);
	return (
		<>
			{header}
			<main>{children}</main>
			{footer}
		</>
	);
}
