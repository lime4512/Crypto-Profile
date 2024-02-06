import '../../style/header/header.scss'
import { HeaderButton } from './HeaderButton'
import { Container } from '../Container'
import { useState } from 'react'
import { DrawerWindow } from '../drawer/Drawer'

export const Header = () => {
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}

	const onClose = () => {
		setOpen(false)
	}
	return (
		<header>
			<Container>
				<div className='header-content'>
					<h1>Logo</h1>
					<div className='header-btn-container'>
						<HeaderButton onClick={showDrawer}>Add coin</HeaderButton>
					</div>
					<DrawerWindow open={open} onClose={onClose} />
				</div>
			</Container>
		</header>
	)
}
