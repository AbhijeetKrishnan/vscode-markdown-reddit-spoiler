import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md: any) {
      return md
        .use(require('markdown-it-reddit-spoiler').spoiler)
        .use(require('markdown-it-reddit-spoiler').blockquote)
    }
  };
}