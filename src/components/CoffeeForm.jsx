import { useState } from "react";
import { coffeeOptions } from "../utils";
import Authentication from "./Authentication";
import Modal from "./Modal";
export default function CoffeeForm(props) {
	const { isAuthenticated } = props;
	const [showModal, setShowModal] = useState(false);
	const [selectedCoffee, setSelectedCoffee] = useState(null);
	const [showCoffeeTypes, setShowCoffeeTypes] = useState(false);
	const [coffeeCost, setCoffeeCost] = useState(0);
	const [hour, setHour] = useState(0);
	const [mint, setMint] = useState(0);

	function handleSubmitForm() {
		if (!isAuthenticated) {
			setShowModal(true);
			return;
		}
	}

	return (
		<>
			{showModal && (
				<Modal
					handleCloseModal={() => {
						setShowModal(false);
					}}
				>
					<Authentication />
				</Modal>
			)}
			<div className="section-header">
				<i className="fa-solid fa-pencil"></i>

				<h2>Start Tracking Today</h2>
			</div>
			<h4>Select Coffee Type</h4>
			<div className="coffee-grid">
				{coffeeOptions.slice(0, 5).map((option, optionIndex) => {
					return (
						<button
							onClick={() => {
								setSelectedCoffee(option.name);
								setShowCoffeeTypes(false);
							}}
							className={
								"button-card " +
								(option.name === selectedCoffee
									? " coffee-button-selected"
									: " ")
							}
							key={optionIndex}
						>
							<h4>{option.name}</h4>
							<p>{option.caffeine} mg</p>
						</button>
					);
				})}
				<button
					onClick={() => {
						setShowCoffeeTypes(true);
						setSelectedCoffee(null);
					}}
					className={
						"button-card " + (showCoffeeTypes ? " coffee-button-selected" : " ")
					}
				>
					<h4>Other</h4>
					<p>n/a</p>
				</button>
			</div>
			{showCoffeeTypes && (
				<select
					onChange={(e) => {
						setSelectedCoffee(e.target.value);
					}}
					id="coffee-list"
					name="coffee-list"
				>
					<option value={null}>Select type</option>
					{coffeeOptions.map((option, optionIndex) => {
						return (
							<option value={option.name} key={optionIndex}>
								{option.name} ({option.caffeine}mg)
							</option>
						);
					})}
				</select>
			)}
			<h4>ADD Cost ($)</h4>
			<input
				type="number"
				className="w-full"
				value={coffeeCost}
				onChange={(e) => {
					setCoffeeCost(e.target.value);
				}}
				placeholder="4.50"
			/>
			<h4>Time since consumption</h4>
			<div className="time-entry">
				<div>
					<h6>Hours</h6>
					<select
						name="time"
						id="hours-select"
						onChange={(e) => {
							setHour(e.target.value);
						}}
					>
						{[
							0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
							19, 20, 21, 22, 23,
						].map((hour, hourIndex) => {
							return (
								<option
									key={hourIndex}
									value={hour}
									style={{ overflow: "hidden" }}
								>
									{" "}
									{hour}
								</option>
							);
						})}
					</select>
				</div>
				<div>
					<h6>Minutes</h6>
					<select
						name="time"
						id="mins-select"
						onChange={(e) => {
							setMint(e.target.value);
						}}
					>
						{[0, 5, 10, 15, 20, 25, 30, 25, 40, 45, 50, 55].map(
							(mint, mintIndex) => {
								return (
									<option
										key={mintIndex}
										value={mint}
										style={{ overflow: "hidden" }}
									>
										{" "}
										{mint}
									</option>
								);
							}
						)}
					</select>
				</div>
			</div>
			<button onClick={handleSubmitForm}>
				<p>Add Entry</p>
			</button>
		</>
	);
}
