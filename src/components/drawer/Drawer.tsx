import { Drawer } from 'antd'
import { FunctionComponent } from 'react'

interface Props {
	onClose: () => void
	open: boolean
}

export const DrawerWindow: FunctionComponent<Props> = ({ onClose, open }) => {
	return (
		<Drawer title='Basic Drawer' onClose={onClose} open={open}>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Drawer>
	)
}
