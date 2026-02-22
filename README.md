# Jazari

A developer-focused VSCode theme with dark and light variants. Teal accent, unified panel layout, zero visual noise.

![VS Code](https://img.shields.io/badge/VS%20Code-1.89%2B-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

**Theme colors** cover the full VS Code surface: editor, sidebar, activity bar, tabs, terminal, status bar, title bar, panels, notifications, debug toolbar, peek view, diff editor, notebooks, settings, welcome page, breadcrumbs, git decorations, and more.

**Syntax highlighting** with semantic token support for JavaScript, TypeScript, JSX/TSX, Python, Go, Rust, CSS/SCSS/LESS, HTML, JSON, YAML, Markdown, Shell, and regex.

**CSS layout customizations** (optional, via [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style)):
- Unified rounded panels for editor, bottom panel, and auxiliary bar
- Transparent sidebar internals that inherit the theme background
- Rounded floating widgets (command palette, context menus, notifications, IntelliSense)
- Pill-shaped activity bar container
- Rounded inputs, buttons, list items, and scrollbar thumbs
- Conditional corner rounding that adapts when panels are shown or hidden

## Installation

Search for **"Jazari"** in VS Code Extensions, or:

```
ext install aalasolutions.jazari
```

To remove the CSS customizations: Command Palette > **"Jazari: Remove CSS Customizations"** > Reload.

If you want the Jazari colors without the rounded panels, remove this line from your `settings.json`:

```json
"custom-ui-style.external.imports": [
    "file:///path/to/jazari/css/jazari.css"  // remove this entry
]
```

## Requirements

- VS Code 1.89+
- [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) (optional, for CSS layout customizations)

## Build from Source

```bash
git clone https://github.com/aalasolutions/vscode-jazari.git
cd vscode-jazari
npm install
npm run compile
npx @vscode/vsce package
```

This produces `jazari-1.0.0.vsix`. Install it with:

```bash
code --install-extension jazari-1.0.0.vsix
```

## Why "Jazari"?

Named after **Al-Jazari** (1136-1206), the Muslim polymath and mechanical engineer who built the world's first programmable machines. His work on automata and engineering laid foundations that echo through every line of code we write today.

## License

MIT

## Credits

Built by [AALA IT Solutions](https://aalasolutions.com).
