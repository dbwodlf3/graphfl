import typescript from "@rollup/plugin-typescript"
import sourcemaps from 'rollup-plugin-sourcemaps';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
    input: "./dist/index.js",
    output: {
		file: 'bundle.js',
		format: 'cjs'
	},
    plugins: [
        nodeResolve(),
        sourcemaps(),
        typescript()
    ]
}