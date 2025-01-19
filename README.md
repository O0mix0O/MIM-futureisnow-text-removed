# Melvor Idle Mod - "Future is now" remover

This mod dynamically removes the "future is now" (and related text) from tooltips 

## Features

- **Removes specific text from tooltips**: Automatically removes the lines of text from tooltips when hovered.
  - Applies to all relevant pop-up tooltips, including:
    - **Preserve Resources Chance Tooltip**
    - **Double Item Chance Tooltip**
    - **Skill-Specific Tooltips** (e.g., Perfect Cook Chance, Successful Cook Chance)
  
- **Dynamic updates**: The tooltips are dynamically generated and removed as needed. The mod will continue working even with changing or newly generated tooltips.

## How It Works

The mod uses a `MutationObserver` to monitor the page for changes in the DOM. When new tooltips are created (e.g., hovering over skill tooltips or pop-ups), the mod finds the specific lines of text (defined by `lang-id` attributes) and removes them.

Currently, it removes the following tooltip text:
- **The future is now, old man**
- **In a future update, you will be able to see where your bonuses come from.**

These are automatically removed from tooltips like the **Successful Cook Chance** tooltip, the **Preserve Resources Chance** tooltip, and others like **Double Item Chance**.
