## Reset.css

The `reset.css` file neutralize the default browser styles, providing a consistent base for development. Using the universal selector (`*`), parameters are applied across the entire document:  
- Removes the default margins of elements;  
- Removes default internal padding;  
- **`box-sizing: border-box;`** Includes padding and borders in the total size of an element, avoiding complex manual adjustments.

---

## Style.css

#### General Features

1. **Styling the Body of the Page** `body`:

   - Sets a dark background color to create contrast with the content.
   - Utilizes Flexbox to center the content both vertically and horizontally.
   - Applies uniform internal spacing around the page using `padding: 60px`.
   - Ensures the minimum height of the page occupies the full height of the window with `min-height: 100vh`.

2. **Styling the Main Element** `main`:

   - Creates a rounded "card" with `border-radius: 20px`.
   - Adds a slightly lighter background to highlight the content.
   - Utilizes Flexbox to align the card elements to the center and organizes them vertically.
   - Applies internal spacing with `padding: 20px` to separate the content from the edges.

3. **Styling the Main Content Container** `.container-first`:

   - Configures the layout with Flexbox, centering the elements and aligning them vertically.
   - Adds internal spacing with `padding: 20px` and external spacing at the top and bottom with `margin`.

4. **Styling the Profile Picture** `.photo`:

   - Turns the image into a circle using `border-radius: 50%`.
   - Sets a fixed size of 110x110 pixels and adjusts the image content without distortion using `object-fit: cover`.

5. **Styling the Title** `h1`:

   - Sets the font size (`font-size: 20px`) and color to white to emphasize the title.
   - Applies internal spacing (`padding`) and bottom external spacing (`margin-bottom`) to separate the title from adjacent elements.

6. **Styling Paragraphs** `.first-p` and `.second-p`:
   - Differentiates the text color:

     `.first-p:` A vibrant green color to highlight information.
     `.second-p:` A white color to complement the layout.
   - Defines smaller font sizes (`font-size: 14px`) and appropriate spacings.

7. **Styling the Links** `.link`:

   - Creates buttons with a dark `background-color`, rounded corners (`border-radius: 15px`), and uniform internal spacing (`padding: 10px`).
   - Ensures consistent width with `width: 100%` for proper alignment.
   - Adds vertical spacing with `margin-top` and `margin-bottom`.

8. **Hover Effect on Links** `a:hover`:

   - Changes the background color to a vibrant green when the cursor hovers over it.
   - Adjusts the text color to black, highlighting the link in an interactive state.

---

## Responsive.css

#### General Features

1. **Global Layout Adjustments**:

   - Reduces the `padding` on `<body>` to optimize the available space on smaller devices.
   - Adjusts `padding` and `border-radius` on `<main>` to better fit compact screens while maintaining a harmonious design.

2. **Responsive Images and Typography**:

   - The profile picture (`.photo`) is resized to 80x80 pixels, ensuring it fits well on smaller screens without losing proportion.
   - The title (`h1`) has its font size reduced to 18px, preserving readability on narrower devices.

3. **Compact Spacing in Texts**:

   - Paragraphs (`.first-p` and `.second-p`) have their font sizes adjusted to 12px and margins reduced, optimizing space usage without cluttering the interface.
   - Vertical spacings between texts are adjusted to maintain clarity and organization.

4. **Optimized Links**:

   - Link buttons (`.link`) have reduced font sizes to 12px and `padding` adjusted to 8px, occupying less space while remaining functional.
   - The `border-radius` is reduced to 10px, softening the design for smaller screens.

---
