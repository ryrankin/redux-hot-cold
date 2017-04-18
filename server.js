const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());

let fewestGuesses;

app.get('/fewest-guesses', (req, res) => {
	res.status(200).json({fewestGuesses});
})

app.post('/fewest-guesses', (req, res) => {
	fewestGuesses = req.body.fewestGuesses;
	console.log(`POST: fewestGuesses: ${fewestGuesses}`);
	res.status(200).json({message: 'New fewest guesses'})
})

app.listen(8080, () => {
	console.log('Listening on port 8080!!')
});