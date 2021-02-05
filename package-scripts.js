const {concurrent, getBin} = require('nps-utils')
const serverPath = 'src/_server/index.js'

let jestBin
try {
	jestBin = getBin('jest-cli', 'jest')
} catch {
	jestBin = 'pleaseInstallJest'
}

const PROD = 'NODE_ENV=production'
const TEST = 'NODE_ENV=test'

// const DEBUG = `DEBUG=\${DEBUG:-$_dbg}`
const DEBUG = `DEBUG=http,express,sqlite,:*`
const DEBUG_BABEL = `DEBUG=*,-babel*`
const DEBUG_ALL = `DEBUG=*`

module.exports = {
	scripts: {
		default: 'nps start', // heroku require default action in nps
		start: {
			default: `nps build db.migration prod`,
			inspect: `nps build db.migration prod.inspect`,
		},
		prod: {
			default: `${DEBUG} ${PROD} node --inspect ${serverPath}`,
			inspect: `${DEBUG_ALL} ${PROD} node --inspect ${serverPath}`,
		},
		dev: {
			default: concurrent.nps('server', 'db.migration', 'client'),
			verbose: concurrent.nps('server.verbose', 'db.migration', 'client'),
		},
		build: `webpack --mode production`,
		client: `webpack serve --mode development --devtool inline-source-map --hot`,
		server: {
			default: `${DEBUG} nodemon --inspect ${serverPath}`,
			verbose: `${DEBUG_ALL} nodemon --inspect ${serverPath}`,
		},
		db: {
			migration: `node_modules/.bin/sequelize db:migrate`,
		},
		test: {
			default: concurrent.nps('test.lint', 'test.full'),
			watch: `jest --color --watch`,
			full: 'jest --coverage --color',
			lint: `eslint {src,plugins}/**/*.js{,x}`,
			inspect: {
				default: `${TEST} node --inspect ${jestBin} --runInBand --watch`,
				verbose: `${DEBUG_BABEL} ${TEST} node --inspect ${jestBin} --runInBand --watch`,
			},
		},
	},
}