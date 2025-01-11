## 🌐
[![Português](https://img.shields.io/badge/-Português-green)](README_js_explicacao.md)  
[![English](https://img.shields.io/badge/-English-blue)](README_js_explicacao_en.md)

---

# Summary of the Programming Logic in the Script

## Description

This script implements the interactivity of a Frequently Asked Questions (FAQ) section. It uses **JavaScript** to handle user interactions, allowing users to toggle the display of answers by clicking on the questions. Here's a breakdown of the logic:

### 1. Selecting FAQ Items
- The script selects all elements with the class `.faq-items` using `document.querySelectorAll`.
- It loops through each item in the list using the `forEach` method.

### 2. Selecting Sub-elements Within Each FAQ Item
- Inside each `.faq-items`, it identifies:
  - `.faq-question`: The clickable question element.
  - `.faq-answer`: The answer element to toggle visibility.
  - `.icon`: The "+" or "-" icon indicating the state.

### 3. Handling Click Events
- An `addEventListener` is added to each `.faq-question` to listen for `click` events.

### 4. Resetting the State of All Items
- Before toggling the clicked item, the script ensures all other questions are reset:
  - Removes the `active` class from all questions.
  - Sets the `display` property of all answers to `none` (hides them).
  - Resets all icons to "+" (collapsed state).

### 5. Toggling the Clicked Item
- If the clicked question is **not active**, it:
  - Adds the `active` class to the clicked question.
  - Sets the corresponding answer's `display` property to `block` (shows it).
  - Changes the icon text to "-" (expanded state).

### 6. Logic Flow
- The use of conditionals (`if (!isActive)`) ensures only one question can remain expanded at a time, improving user experience.

---

## Key Takeaways

1. **Dynamic Class Management:** Classes are added and removed dynamically to control styles and state.
2. **Efficient Element Selection:** Querying and manipulating only relevant elements within each FAQ item prevents global side effects.
3. **Centralized Reset Logic:** Ensures that only one FAQ item is expanded at any given time.

---