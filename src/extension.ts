import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md: any) {
      const markdownItRedditSpoiler = require('markdown-it-reddit-spoiler');
      markdownItRedditSpoiler.openTag = `<input type="checkbox" class="spoilerControl"/>
      <label class="spoiler" for="spoilerControl"><span>`;
      markdownItRedditSpoiler.closeTag = '</span></label>';
      return md
        .use(markdownItRedditSpoiler.spoiler)
        .use(markdownItRedditSpoiler.blockquote);
    }
  };
}