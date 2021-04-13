# Reddit Spoilers for Markdown

![GitHub](https://img.shields.io/github/license/AbhijeetKrishnan/vscode-markdown-reddit-spoiler)

![Demo](/docs/demo.gif)
## What is it?

A Visual Studio Code extension that adds support for the Reddit `>!spoiler!<` syntax to the built-in markdown preview.

## Features

- Use `>!spoiler!<` to hide spoiler text, and click on it to uncover - just like on Reddit

## Issues

- Requires disabling Markdown preview security to allow revealing spoilers by clicking on them
- The following Markdwon elements cannot be hidden using the spoiler syntax -
  - tables
  - text containing one or more empty lines
  - TeX math (rendered, for e.g., using [Markdown+Math](https://marketplace.visualstudio.com/items?itemName=goessner.mdmath))
  - images