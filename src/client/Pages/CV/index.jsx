import React, {useRef} from 'react'
import {Box} from 'Components/Box'
import {Theme, CVTextTheme, CV_LIGHT, WHITE} from 'Styles'
import {FIRST_NAME, LAST_NAME} from 'config/personal'
import {useReactToPrint} from 'react-to-print'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import {BlueButton, VioletButton} from 'src/client/Components/Buttons'
import Link from 'src/client/Components/Link'
import {M, Text} from 'src/client/Components/Text'
import {useMediaQuery} from 'plugins/MediaQuery'
import styled from 'styled-components'
import ImageBox from 'src/client/Components/ImageBox'
import cvPreview from 'assets/images/cv-preview.png'

const ImgBox = styled(ImageBox)`
	width: 87%;
	padding-top: 127%;
	filter: blur(3px);
`

const WrapBox = styled(Box)`
	display: ${p => p.hidden && 'none'};
`

const CVPanel = ({cvRef}) => {
	return (
		<Box
			{...{
				ref: cvRef,
				bg: WHITE,
				padding: '1rem',
				height: '29.6cm',
			}}
			top
		>
			<LeftBar />
			<RightBar />
		</Box>
	)
}

const Buttons = ({handlePrint}) => {
	return (
		<Box {...{padding: '1rem 1rem'}} top left gap>
			<Link {...{as: Link, to: '/'}}>
				<BlueButton>Go to full CV page</BlueButton>
			</Link>
			<VioletButton {...{onClick: handlePrint, sets: [M]}}>Print</VioletButton>
		</Box>
	)
}

const CV = () => {
	const {isPhone} = useMediaQuery()
	const cvRef = useRef()
	const handlePrint = useReactToPrint({
		content: () => cvRef.current,
		documentTitle: `${LAST_NAME} ${FIRST_NAME} - CV`,
	})
	return (
		<Box
			{...{bg: CV_LIGHT, top: true, padding: '0 0 1rem', minHeight: '100vh'}}
		>
			<Theme theme={CVTextTheme}>
				<Box top column {...{width: '21cm'}}>
					<Buttons {...{handlePrint}} />
					<WrapBox {...{hidden: isPhone}}>
						<CVPanel {...{cvRef}} />
					</WrapBox>
					{isPhone && (
						<Box {...{padding: '0 1rem 1rem'}} column gap>
							<Text sets={[M]}>
								Sorry, preview is available for larger screens only.
							</Text>
							<ImgBox {...{src: cvPreview}} />
						</Box>
					)}
				</Box>
			</Theme>
		</Box>
	)
}

export default CV
