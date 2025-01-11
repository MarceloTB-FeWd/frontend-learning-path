## 🌐
[![Português](https://img.shields.io/badge/-Português-green)](README_css_explicacao.md)  
[![English](https://img.shields.io/badge/-English-blue)](README_css_explicacao_en.md)

---

## Reset.css

The `reset.css` file is used to neutralize the default styles of browsers, ensuring a consistent base for development. Using the universal selector (`*`), parameters can be applied across the entire document: 
- Removes the default margin of elements; 
- Removes internal spacing;
- Removes symbols related to listed items;
- **`box-sizing: border-box;`** Includes padding and borders in the total size calculation of elements, avoiding complex manual adjustments.

---

## Style.css

#### General Features

1. **Page Body Styling** `body`:

- Defines the background with an SVG image to occupy the top portion and a color fill for the bottom portion, ensuring no overlap and keeping the layout balanced;
- Utilizes Flexbox to center the content both vertically and horizontally and organizes it in a column layout;
- Applies uniform internal spacing around the page using `padding: 50px`;
- Ensures the page height occupies the entire window height with `height: 100vh`.

2. **Main Element Styling** `main`:

- Creates a "card" with rounded corners using `border-radius: 15px`;
- Adds a light background to highlight the content;
- Utilizes Flexbox to align card elements to the center and organizes them vertically in a column;
- Applies internal spacing with `padding: 20px` to separate the content from the borders;
- Sets the element width to 50% to center it on the page, with a maximum width of 600px and a minimum width of 300px.

3. **Title and SVG Container** `.container-title-svg`:

- Configures the layout with Flexbox, centering the elements and aligning them side by side;
- Adds internal spacing with `padding: 20px`;
- Adds a `gap` of 25px between elements;
- Applies a `margin-bottom` of 10px to create spacing below the next element.

4. **FAQ Items Container** `.faq-items`:

- Applies a `border-bottom` to indicate separation between elements.

5. **Classes within the FAQ Container** `.faq-question`, `.icon`:

- Applies `display: flex` with spacing between elements, aligning them centrally;
- Removes default button borders and background color;
- Applies a width of 100% to make the button fill the parent element;
- Adds a hover effect to the button, giving the user feedback when hovering, along with a pointer cursor;
- The icon uses `display: flex` for proper alignment and justification at the center;
- Sets fixed height and width;
- Adds a background color, rounded borders, and internal spacing of 10px.

6. **Answer Elements Container** `.faq-answer`:

- Sets a specific font size and color to differentiate it from other text;
- Uses `display: none` to hide it initially, as it will be toggled on and off via the `script.js`.

7. **Styling for Active Icons** `.faq-question.active .icon`:

- When active, changes the background color and the symbol while maintaining other properties defined in `.icon`.

8. **Footer Container and Its Elements** `.container-footer-links`:

- Uses `display: flex` to align the elements centrally and side by side;
- Adds `margin-top` and `margin-bottom` of 10px relative to other elements;
- Applies internal spacing of 10px.

9. **Link and Description Styling** `.link`, `.p-footer`:

- Sets a font size and color to distinguish links from other text;
- Adds internal spacing of 10px;
- Adds a `margin-bottom` of 10px.

10. **Hover Effect on Links** `a:hover`:

- Changes the color when hovered over;
- Adjusts the text color to purple, highlighting the link when interactive.

---

## Responsive.css

#### General Features

1. **Global Layout Adjustments**:

- Reductions and optimizations for screen sizes up to 375px.

---