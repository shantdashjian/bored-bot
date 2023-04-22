/**
Challenge: 

- Add some styling! Be creative, play with layout a bit
  (Spoiler: I'm going to use a single-column flexbox layout)
  add some color, grab a font from Google fonts - whatever
  you'd like!
*/

document.getElementById('btn').addEventListener('click', fetchActivity)

function fetchActivity() {
	fetch("https://apis.scrimba.com/bored/api/activity")
		.then(res => res.json())
		.then(data => {
				document.getElementById('activity').textContent = data.activity
				document.body.classList.add('happy')
				document.getElementById('title').textContent = '🕺HappyBot 🕺'
		})
}
