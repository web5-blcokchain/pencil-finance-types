import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/bundle'
  ],
  rollup: {
    esbuild: {
      minify: true
    },
    inlineDependencies: true,
    json: {
      compact: true,
      namedExports: false,
      preferConst: false
    },
    emitCJS: true,
    commonjs: {
      requireReturnsDefault: 'auto'
    },
    dts: {
      respectExternal: false
    }
  },
  clean: true,
  declaration: true
})
