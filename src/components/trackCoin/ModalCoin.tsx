import { Button, Modal } from 'antd'
import { FunctionComponent, useEffect, useState } from 'react'

interface Props {
	modal: boolean
	setModal: () => void
	infoCoin: { name: string } | undefined
}

export const ModalCoin: FunctionComponent<Props> = ({
	modal,
	setModal,
	infoCoin,
}) => {
	const [open, setOpen] = useState(false)
	useEffect(() => {
		setOpen(modal)
	}, [modal])
	console.log(typeof infoCoin)
	const handleCancel = () => {
		setOpen(false)
		setModal()
	}
	return (
		<>
			<Modal
				open={open}
				title='Title'
				onCancel={handleCancel}
				footer={[
					<Button key='link' href='https://google.com' type='primary'>
						Search on Google
					</Button>,
				]}
			>
				<h1>{infoCoin == undefined || infoCoin.name}</h1>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	)
}
