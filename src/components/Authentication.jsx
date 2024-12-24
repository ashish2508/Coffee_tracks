import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Authentication(props) {
  const {handleCloseModal}=props
	const [isRegistration, setIsRegistration] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const { signup, login } = useAuth();
	const [authError, setAuthError] = useState("");

	async function handleAuthenticate() {
		if (
			!email ||
			!email.includes("@") ||
			!password ||
			password.length < 6 ||
			isAuthenticating
		) {
			return;
		}
		try {
			setIsAuthenticating(true);
			setAuthError("");
			if (isRegistration) {
				await signup(email, password);
			} else {
				await login(email, password);
			}
      handleCloseModal();
		} catch (err) {
			const msg = err.message
				.replace("Firebase: Error (auth/", "")
				.replace(").", "");
			let errorMessage = "";

			if (msg === "email-already-in-use") {
				errorMessage =
					"This email is already in use. Please use a different email.";
			} else if (msg === "invalid-credential") {
				errorMessage =
					"Invalid credentials. Please check your email and password.";
			} else {
				errorMessage = "An error occurred. Please try again.";
			}
			setAuthError(errorMessage);
      return
		} finally {
			setIsAuthenticating(false);
		}
	}

	return (
		<>
			<h2 className="sign-up-text">{isRegistration ? "Sign Up" : "Login"}</h2>
			<p>
				{isRegistration ? "Create Your Account!" : "Sign in to your account"}
			</p>
			{authError && <h2 style={{ color: "darkred" }}>{authError}</h2>}

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
				<p>{isAuthenticating ? "Authenticating.." : "Submit"}</p>
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
