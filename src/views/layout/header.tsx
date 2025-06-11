import logo from '../../assets/logoWR.svg';

export function Header() {
	return (
		<header>
			<nav>
				<img className='logo' src={logo} alt="WikiRail Logo" />
				<h1>WikiRail</h1>
			</nav>
		</header>
	);
}
