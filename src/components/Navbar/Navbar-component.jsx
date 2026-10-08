import Button from '@mui/material/Button';

export default function Navbar() {
	return (
		<nav aria-label="Main navigation">
			<a href="/">Productivity App</a>
			<ul>
				<Button variant="contained" color="primary" href="/">Home</Button>
				<Button variant="contained" color="primary" href="/tasks">Tasks</Button>
			</ul>
		</nav>
	);
}
