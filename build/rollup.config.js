import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import common from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/vueTab.esm.js',
    format: 'esm',
    name: 'tab',
    exports: 'named'
  },
  plugins: [
    resolve({
      mainFields: ['main']
    }),
    vue(),
    babel({
      runtimeHelpers: true,
      extensions: ['.js', '.vue']
    }),
    common()
  ]
};
