function pickRandomActivity() {
	const dailyActivities = [
		"Leg Workout",
		"Run bridge diagnosis",
		"Kitchen duty",
		"Listen to Major Tom",
		"Film Instagram reels"
	]
	let randomIndex = Math.random() * dailyActivities.length;
	let randomActivity = Math.floor(randomIndex);

	return dailyActivities[randomActivity];
}

print("Todays activity is: " + pickRandomActivity());
