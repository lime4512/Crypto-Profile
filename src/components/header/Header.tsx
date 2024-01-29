import '../../style/header/header.scss'

import { Container } from '../Container'

export const Header = () => {
	return (
		<header>
			<Container>
				<div className='header-content'>
					<h1>Logo</h1>
					<div>
						<button>add</button>
						<button>login</button>
					</div>
				</div>
			</Container>
		</header>
	)
}
