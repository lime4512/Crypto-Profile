import { FunctionComponent } from 'react'
import '../../style/header/headerBtn.scss'

interface Props {
	onClick: () => void
	children: React.ReactNode
}
export const HeaderButton: FunctionComponent<Props> = ({
	children,
	onClick,
}) => {
	return (
		<button className='header-btn' onClick={onClick}>
			{children}
		</button>
	)
}
