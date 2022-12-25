module.exports = {
	'*.json': ['rome format --write'],
	'*.{ts,tsx}': ['rome format --write', 'rome check'],
};
