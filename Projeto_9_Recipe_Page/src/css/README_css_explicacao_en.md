## Reset.css

The `reset.css` file neutralize the default browser styles, providing a consistent base for development. Using the universal selector (`*`), parameters are applied across the entire document:  
- Removes the default margins of elements;  
- Removes default internal padding;  
- **`box-sizing: border-box;`** Includes padding and borders in the total size of an element, avoiding complex manual adjustments.

---

## Style.css

#### General Features

1. **Global Style Definition**:
   - The page body is styled using the `Flexbox` property, vertically and horizontally centering content and arranging elements in columns (one below the other);

2. **Primary Structure and Layout**:
   - The `<main>` element is styled as a primary container, displayed as a card with rounded corners, subtle shadows, and consistent internal spacing;

3. **Image Styling**:
   - The main image is configured to be responsive, with rounded corners and light shadows for a polished look;

4. **Typographic Hierarchy**:
   - Titles (`h1`, `h2`) are highlighted with appropriate sizes and colors, creating a clear visual hierarchy to guide the user through the content;

5. **List and Table Styling**:
   - Ordered and unordered lists are formatted with appropriate spacing and custom markers, while tables feature dividing lines and internal spacing to enhance readability;

6. **Content Componentization**:
   - Elements like `.container-first`, `.container-pt`, `.container-ingre`, `.container-inst`, and `.container-nutri` organize different sections of the page, each with specific styles to emphasize their functionality;

7. **Accessibility Focus**:
   - Links have defined styles and visible focus outlines, facilitating keyboard navigation and ensuring accessibility;

8. **Informative Footer**:
   - The `.attribution` class positions credits or additional information in the footer, with center alignment and a subtle typographic style.

---

## Responsive.css

#### General Features

1. **Global Layout Adjustments**:
   - Reduces general padding in `<body>` and `<main>` to maximize usable space on small screens.
   - Centers and removes excessive shadows from `<main>` to maintain content focus and avoid visual clutter;

2. **Responsive Images and Typography**:
   - Images are resized to take up the available width, maintaining proportions and smooth corners.
   - Titles (`h1`, `h2`) are resized and centered to ensure readability and proper alignment on small screens;

3. **Compact Spacing for Sections and Lists**:
   - Main containers have reduced internal spacing to better utilize the available area.
   - Lists (`ul`, `ol`) feature smaller indentation and spacing between items for a more optimized layout;

4. **Tables and Text Elements**:
   - Font sizes in tables and footers are reduced to display content without truncation or horizontal scrolling.
   - Cell padding (`th`, `td`) adjusted for compactness without sacrificing readability;

5. **Focus on Links and Accessibility**:
   - Links use smaller font sizes and consistent colors to maintain visual identity.
    - The focus style (`a:focus`) is refined to highlight links less intrusively on smaller screens.
