import './style.css'
import { MonacoEditorLanguageClientWrapper, UserConfig } from 'monaco-editor-wrapper';
import { workspace, Uri } from 'vscode'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="monaco-editor-root">
  </div>
`

const run = async () => {
  const wrapper = new MonacoEditorLanguageClientWrapper();
  const userConfig : UserConfig = {
    wrapperConfig: {
      editorAppConfig: {
        $type: 'extended',
        codeResources: {
          main: {
            text: 'print("Hello, World!")',
            uri: '/workspace/hello.py'
          }
        }
      }
    }
  };

  const htmlElement = document.getElementById('monaco-editor-root');
  await wrapper.initAndStart(userConfig, htmlElement);

  workspace.getConfiguration('editor').update('tabSize', 5)
}

run()