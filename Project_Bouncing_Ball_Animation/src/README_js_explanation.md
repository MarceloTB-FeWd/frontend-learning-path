## 🌐
[![Português](https://img.shields.io/badge/-Português-green)](./README_js_explicacao.md)  
[![English](https://img.shields.io/badge/-English-blue)](./README_js_explanation.md)

## Explanation of the Logic Used

### Numbers are in (script.js)

#### 1 - Ball Selection
Selects the HTML element with the id 'ball' and stores it in the constant `ball`, allowing JavaScript to manipulate the ball for animation.

#### 2 - Container Selection
Selects the first element in the DOM with the class 'animation-container' and stores it in the constant `container`. This container defines the boundaries where the ball will move.

#### 3 - Position and Velocity Variables
- `posX` and `posY` are initialized at 0 to set the initial position of the ball within the container;
- `velocityX` and `velocityY` are set to 2 and 3, respectively, determining the ball's movement speed in the horizontal (X) and vertical (Y) directions.

#### 4 - Animation Function
- Defines the function `animationBall`, which will be responsible for updating the ball's position;
- Increments `posX` and `posY` with `velocityX` and `velocityY`, respectively, moving the ball in the specified direction.

#### 5 - Horizontal Collision Check and Velocity Inversion
- Checks if the ball has reached the right edge (`posX + ball width >= container width`) or the left edge (`posX <= 0`) of the container;
- If true, reverses the ball's horizontal direction by multiplying `velocityX` by -1, causing the ball to "bounce" off the edge.

#### 6 - Vertical Collision Check and Velocity Inversion
- Checks if the ball has reached the bottom edge (`posY + ball height >= container height`) or the top edge (`posY <= 0`) of the container;
- If true, reverses the ball's vertical direction by multiplying `velocityY` by -1, causing the ball to "bounce" off the edge.

#### 7 - Ball Position Update
Updates the ball's position in the DOM using the CSS property `transform` with `translate`, moving the ball to `(posX, posY)` in pixels.

#### 8 - Scheduling the Next Frame
Requests that the function `animationBall` be called before the next screen repaint, creating a continuous animation loop.

#### 9 - Animation Initialization
Calls the `animationBall` function for the first time to start the ball's animation loop.

### Manual Creation of the Modal

#### 1
Selects the links that open the modals.

##### 1.1
Selects the modals.

##### 1.2
Selects the buttons to close the modals.

#### 2
Function to open the modal.

##### 2.1
Function to close the modal.

#### 3
Events to open the modals. When one is open, it automatically closes the other modal.

#### 4
Events to close the modals.

#### 5
Closes the modal when clicking outside the content (backdrop).
