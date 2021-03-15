import React from 'react'
import {Box} from 'Components/Box'
import {styled} from 'Styles'

export const glyphs = {
	email: require('assets/icons/email.svg'),
	phone: require('assets/icons/phone.svg'),
	linkedin: require('assets/icons/linkedin.svg'),
	github: require('assets/icons/github.svg'),
}

export const IconBox = styled(Box).attrs({cursor: true})`
	width: ${p => p.width || p.sizeBg};
	height: ${p => p.height || p.sizeBg};

	border-radius: ${p => p.round && `50%`};

	background-image: url(${p => p.icon});
	background-repeat: no-repeat;
	background-position: center;
	background-size: ${p => p.size};

	transition: 0.5s;
	${p => p.theme.colors}
`

// const Icon = ({Svg, ...p}) => <IconBase {...p}>{/* <Svg /> */}</IconBase>

const MDWrap = styled.span`
	height: ${p => `${p.height || p.size || 'auto'}`};
	width: ${p => `${p.width || p.size || 'auto'}`};

	.material-icons {
		font-size: ${p => `${p.fontSize}`};
	}
`

export const MDIcon = ({children, icon, ...p}) => (
	<MDWrap {...p}>
		<span {...{className: 'material-icons'}}>{icon}</span>
	</MDWrap>
)
