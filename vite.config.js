import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin'

export default {
  optimizeDeps: {
    esbuildOptions: {
      plugins: [importMetaUrlPlugin]
    }
  }
}