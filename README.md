# Jazari

A developer-focused VSCode theme with dark and light variants. Teal accent, unified panel layout, zero visual noise.

Named after **Al-Jazari** (1136-1206), the Muslim polymath and mechanical engineer who built the world's first programmable machines. His work on automata and engineering laid foundations that echo through every line of code we write today.

![VS Code](https://img.shields.io/badge/VS%20Code-1.89%2B-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Variants

| Jazari Dark | Jazari Light |
|---|---|
| Deep canvas with teal accents | Clean white surface with teal accents |

## Color Palette

### Dark

| Role | Hex | Preview |
|---|---|---|
| Canvas | `#0F1114` | ![#0F1114](https://via.placeholder.com/12/0F1114/0F1114.png) |
| Surface | `#161920` | ![#161920](https://via.placeholder.com/12/161920/161920.png) |
| Accent | `#2AACB8` | ![#2AACB8](https://via.placeholder.com/12/2AACB8/2AACB8.png) |
| Foreground | `#D0D4DC` | ![#D0D4DC](https://via.placeholder.com/12/D0D4DC/D0D4DC.png) |
| Muted | `#555D6E` | ![#555D6E](https://via.placeholder.com/12/555D6E/555D6E.png) |

### Light

| Role | Hex | Preview |
|---|---|---|
| Canvas | `#F0F1F3` | ![#F0F1F3](https://via.placeholder.com/12/F0F1F3/F0F1F3.png) |
| Surface | `#FAFBFC` | ![#FAFBFC](https://via.placeholder.com/12/FAFBFC/FAFBFC.png) |
| Accent | `#1A8A95` | ![#1A8A95](https://via.placeholder.com/12/1A8A95/1A8A95.png) |
| Foreground | `#24292E` | ![#24292E](https://via.placeholder.com/12/24292E/24292E.png) |
| Muted | `#8B949E` | ![#8B949E](https://via.placeholder.com/12/8B949E/8B949E.png) |

### Syntax Colors (Dark / Light)

| Token | Dark | Light |
|---|---|---|
| Keywords | `#D48C6F` | `#A85730` |
| Functions | `#6BB5E0` | `#2871A8` |
| Strings | `#8ABD7E` | `#3A7A3A` |
| Types | `#B48EDA` | `#7C3E9C` |
| Numbers | `#2AACB8` | `#1A8A95` |
| Properties | `#9CABC0` | `#4A6078` |
| Comments | `#555D6E` | `#8B949E` |
| Decorators | `#C9A84C` | `#956E14` |
| Errors | `#E05C6C` | `#CF2236` |

## Features

**Theme colors** cover the full VS Code surface: editor, sidebar, activity bar, tabs, terminal, status bar, title bar, panels, notifications, debug toolbar, peek view, diff editor, notebooks, settings, welcome page, breadcrumbs, git decorations, and more.

**Syntax highlighting** with semantic token support for: JavaScript, TypeScript, JSX/TSX, Python, Go, Rust, CSS/SCSS/LESS, HTML, JSON, YAML, Markdown, Shell, and regex.

**CSS layout customizations** (optional, via [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style)):
- Unified rounded panels for editor, bottom panel, and auxiliary bar
- Transparent sidebar internals that inherit the theme background
- Rounded floating widgets (command palette, context menus, notifications, IntelliSense)
- Pill-shaped activity bar container
- Rounded inputs, buttons, list items, and scrollbar thumbs
- Smooth transitions on hover states and sash handles
- Conditional corner rounding that adapts when panels are shown or hidden

## Installation

### From Marketplace

Search for **"Jazari"** in VS Code Extensions, or:

```
ext install aalasolutions.jazari
```

### From .vsix

```bash
code --install-extension jazari-1.0.0.vsix
```

## CSS Customizations

On first activation, Jazari checks for the [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) extension. If installed, it automatically registers `jazari.css` for panel rounding and layout polish. If not installed, it prompts you to install it.

The CSS layer is optional. The theme colors work perfectly without it.

To remove the CSS customizations at any time:

1. Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
2. Run **"Jazari: Remove CSS Customizations"**
3. Reload the window

## CSS Variables

All layout values are exposed as CSS variables for easy tuning via your own stylesheet:

```css
--jazari-widget-radius: 12px;   /* Floating widgets (command palette, menus) */
--jazari-input-radius: 8px;     /* Inputs, buttons, dropdowns */
--jazari-item-radius: 6px;      /* List rows, menu items */
--jazari-pill-radius: 9999px;   /* Activity bar, scrollbar, badges */
--jazari-block-radius: 26px;    /* Main panel rounding (editor, bottom, aux) */
--jazari-block-gap: 6px;        /* Gap around rounded panels */
```

## Language Support

Full token coverage with both TextMate scopes and semantic tokens:

- **JavaScript / TypeScript / JSX / TSX**
- **Python** (decorators, magic methods, f-strings)
- **Go** (packages, imports)
- **Rust** (lifetimes, macros, attributes)
- **CSS / SCSS / LESS** (selectors, properties, values, units, at-rules)
- **HTML** (tags, attributes, JSX components)
- **JSON** (keys vs values)
- **YAML** (keys, values, anchors)
- **Markdown** (headings, bold, italic, code, links, lists, blockquotes)
- **Shell** (variables)
- **Regex** (character classes, quantifiers, groups)

## Requirements

- VS Code 1.89+
- [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) (optional, for CSS layout customizations)

## License

MIT

## Credits

Built by [AALA IT Solutions](https://aalasolutions.com).
