import { Modal } from 'antd'
import { FunctionComponent, useEffect, useState } from 'react'
import '../../style/trackCoin/modalCoin.scss'

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
				onCancel={handleCancel}
				footer={[<button>track currency</button>]}
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
