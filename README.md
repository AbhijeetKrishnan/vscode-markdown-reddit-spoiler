# Reddit Spoilers for Markdown

[![Marketplace](https://vsmarketplacebadge.apphb.com/version/AbhijeetKrishnan.markdown-reddit-spoiler.svg)](https://marketplace.visualstudio.com/items?itemName=AbhijeetKrishnan.markdown-reddit-spoiler)
[![GitHub](https://img.shields.io/github/license/AbhijeetKrishnan/vscode-markdown-reddit-spoiler)](https://github.com/AbhijeetKrishnan/vscode-markdown-reddit-spoiler/blob/main/LICENSE)

![Demo](/docs/demo.gif)
## What is it?

A Visual Studio Code extension that adds support for the Reddit `>!spoiler!<` syntax to the built-in
[markdown preview](https://code.visualstudio.com/docs/languages/markdown).

## Features

- Use `>!spoiler!<` to hide spoiler text, and click on it to uncover - just like on Reddit

## Issues

- Requires disabling
[Markdown preview security](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview-security)
to allow revealing spoilers by clicking on them (`onclick` is inserted into the HTML)
- The following Markdown elements cannot be hidden using the spoiler syntax -
  - tables
  - text containing one or more empty lines
  - TeX math (rendered, for e.g., using [Markdown+Math](https://marketplace.visualstudio.com/items?itemName=goessner.mdmath))
  - images
- spoilers in the preview rapidly flash when the Markdown file is being actively updated
- long lines in spoilers are not wrapped correctly