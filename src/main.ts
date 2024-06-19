import './style.css'
import { MonacoEditorLanguageClientWrapper, UserConfig } from 'monaco-editor-wrapper';

const extensionFilesOrContents = new Map<string, string | URL>();
extensionFilesOrContents.set('/test.json', "Test");

const userConfig : UserConfig = {
  wrapperConfig: {
    editorAppConfig: {
      $type: 'extended',
      codeResources: {
        main: {
          text: 'print("Hello, World!")',
          uri: '/workspace/hello.py'
        }
      },
      extensions: [{
        config: {
            name: 'myextension',
            publisher: 'me'
        },
        filesOrContents: extensionFilesOrContents
      }]
    }
  }
};

const run = async () => {
  const htmlElement = document.getElementById('monaco-editor-root');

  const wrapper = new MonacoEditorLanguageClientWrapper();
  await wrapper.initAndStart(userConfig, htmlElement);
  await wrapper.dispose();

  const wrapper2 = new MonacoEditorLanguageClientWrapper();
  await wrapper2.initAndStart(userConfig, htmlElement);
  await wrapper2.dispose();
}

run()