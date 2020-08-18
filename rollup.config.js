import typescript from 'rollup-plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
  plugins: [typescript(), terser()],
  output: [
    {
      name: 'Waudit',
      file: 'dist/waudit.js',
      format: 'umd',
    },
    {
      file: 'dist/waudit.esm.js',
      format: 'es',
    }
  ],
  external: ['lodash', 'rxjs']
}
