import {
	ABOUT,
	EXPERIENCE,
	FOOTER,
	INTRO,
	PORTFOLIO,
	SKILLS,
} from 'src/constants'
import {
	About,
	Experience,
	Intro,
	Portfolio,
	Skills,
	// Logos
} from './Sections'

export const sections = [
	{id: INTRO, label: 'intro', Component: Intro},
	{id: ABOUT, label: 'about me', Component: About},
	// {id: 'logos', label: 'logos', Component: Logos, noLink: true},
	{id: SKILLS, label: 'skills', Component: Skills},
	{
		id: PORTFOLIO,
		label: 'portfolio',
		Component: Portfolio,
		links: [
			{id: 'link_out1', label: 'projekt 1'},
			{id: 'link_out2', label: 'projekt 2'},
			{id: 'link_out3', label: 'projekt 3'},
			{id: 'link_out4', label: 'projekt 4'},
		],
	},
	{id: EXPERIENCE, label: 'experience', Component: Experience},
	{id: FOOTER, label: 'contact'},
]

export const skillsDB = [
	{
		label: 'Technologies',
		groups: [
			[
				{label: 'JavaScript', score: 5},
				{label: 'React.js', score: 4},
				{label: 'Redux', score: 2},
				{label: 'Node.js', score: 2},
			],
			[
				{label: 'HTML', score: 5},
				{label: 'CSS', score: 5},
				{label: 'Styled-components', score: 4},
				{label: 'SASS', score: 3},
				{label: 'JQuery', score: 2},
			],
			[
				{label: 'GraphQL', score: 4},
				{label: 'REST', score: 3},
				{label: 'SQLite', score: 3},
				{label: 'Firebase', score: 2},
			],
		],
	},
	{
		label: 'Tools',
		groups: [
			[
				{label: 'Git', score: 4},
				{label: 'Webpack', score: 3},
			],
			[
				{label: 'Photoshop', score: 3},
				{label: 'COREL Photo-paint', score: 4},
			],
		],
	},
	{
		label: 'Languages',
		groups: [
			[
				{label: 'Polish', score: 6},
				{label: 'English', score: 5},
				{label: 'Russian', score: 1},
			],
		],
	},
]

export const projectsDB = [
	{
		scr: '',
		label: 'project 1',
		link: '',
	},
	{
		scr: '',
		label: 'project 2',
		link: '',
	},
	{
		scr: '',
		label: 'project 3',
		link: '',
	},
	{
		scr: '',
		label: 'project 4',
		link: '',
	},
	{
		scr: '',
		label: 'project 5',
		link: '',
	},
	{
		scr: '',
		label: 'project 6',
		link: '',
	},
]