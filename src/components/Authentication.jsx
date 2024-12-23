import { useState } from "react";

export default function Authentication() {
	const [isRegistration, setIsRegistration] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isAuthenticating, setIsAuthenticating] = useState(false);

	async function handleAuthenticate() {}

	return (
		<>
			<h2 className="sign-up-text">{isRegistration ? "Sign Up" : "Login"}</h2>
			<p>
				{isRegistration ? "Create Your Account!" : "Sign in to your account"}
			</p>
			<label>Email</label>
			<input
				type="email"
				placeholder="Enter Your Email"
				required
				autoComplete="email webauthn"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<label>Password</label>
			<input
				type="password"
				placeholder="Enter Your Password"
				required
				autoComplete="current-password webauthn"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<button onClick={handleAuthenticate}>
				<p>Submit</p>
			</button>
			<hr />
			<div className="register-content">
				<p>
					{isRegistration
						? "Already have an account?"
						: "Don't have an account?"}
				</p>
				<button
					onClick={() => {
						setIsRegistration(!isRegistration);
					}}
				>
					<p>{isRegistration ? "Log in" : "Sign Up"}</p>
				</button>
			</div>
		</>
	);
}
