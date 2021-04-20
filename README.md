# Reddit Spoilers for Markdown

[![Marketplace](https://vsmarketplacebadge.apphb.com/version/AbhijeetKrishnan.markdown-reddit-spoiler.svg)](https://marketplace.visualstudio.com/items?itemName=AbhijeetKrishnan.markdown-reddit-spoiler)
[![GitHub](https://img.shields.io/github/license/AbhijeetKrishnan/vscode-markdown-reddit-spoiler)](https://github.com/AbhijeetKrishnan/vscode-markdown-reddit-spoiler/blob/main/LICENSE)

![Demo](/docs/demo.gif)
## What is it?

A Visual Studio Code extension that adds support for the Reddit `>!spoiler!<` syntax to the built-in
[markdown preview](https://code.visualstudio.com/docs/languages/markdown).

## Features

- Use `>!spoiler!<` to hide spoiler text, and click on it to uncover - just like on Reddit
- Based on the [markdown-it](https://github.com/markdown-it/markdown-it) plugin [markdown-it-reddit-spoiler](https://github.com/iMrDJAi/markdown-it-reddit-spoiler)
- Uses the [checkbox CSS hack](https://stackoverflow.com/a/32721572) to ensure spoilers can be smoothly checked and unchecked

## Installation ...

### ... from inside of VSCode

Press the <kbd>F1</kbd> key inside of *Visual Studio Code* and type `extension`. Choose `Extensions: Install Extension` 
and then select the `Reddit Spoiler for Markdown Preview` extension from the list.

### ... from the Mac/Linux Command Line
```
cd $HOME/.vscode/extensions
git clone https://github.com/AbhijeetKrishnan/vscode-markdown-reddit-spoiler.git
cd vscode-markdown-reddit-spoiler
npm install
```

### ... from the Windows Command Line
```
cd  %USERPROFILE%\.vscode\extensions
git clone https://github.com/AbhijeetKrishnan/vscode-markdown-reddit-spoiler.git
cd vscode-markdown-reddit-spoiler
npm install
```

## Issues

- Markdown present within spoiler tags will not be correctly rendered. This includes (but is not limited to) tables, text containing one or more empty lines, TeX math (rendered, for e.g., using [Markdown+Math](https://marketplace.visualstudio.com/items?itemName=goessner.mdmath)) and images.
- spoilers in the preview rapidly flash when the Markdown file is being actively updated, which can be distracting
