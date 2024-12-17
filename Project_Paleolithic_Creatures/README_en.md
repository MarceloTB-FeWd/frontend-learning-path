## 🌐
[![Português](https://img.shields.io/badge/-Português-green)](README.md)  
[![English](https://img.shields.io/badge/-English-blue)](README_en.md)

---

## About

Carried out during the "Immersion: From Zero to Programmer" event, which took place from October 7th to 13th, 2024. The event was focused on individuals with zero prior knowledge of programming languages such as **CSS** and **JavaScript**, using **HTML** as the markup/structure for building a web page. It was offered online and free of charge by **@DevemDobro**.

---

## Project Name

Project - Paleolithic Creatures

This project represents my first contact with web development, focusing on the Front-end. As a result, it is pretty simple and should be seen as the first step on a long journey.

This website was created using HTML, CSS, and JavaScript as part of my web development learning process. It serves as a catalog of creatures inspired by what Brazilian folklore characters might have looked like if painted on cave walls during the Stone Age, presented in a simple, user-friendly, and interactive interface.

---

## Features

- Optimized for screen sizes up to 750px;
- Display a list of creature cards;
- Show detailed information for each creature upon clicking;
- Activate the selected creature in the list when clicked;
- Deactivate the default opened creature in the list when another is clicked;
- Display the selected creature’s card upon clicking;
- Hide the current creature card when a new one is selected, keeping only the active one visible on the screen.

---

## Technologies Used

- Software - Visual Studio Code (for writing the code);
- HTML5 (website structure);
- CSS3 (website styling);
- JavaScript (user interaction with the site);
- Git (for interacting between local and remote repositories via command line);
- [GitHub Pages](https://pages.github.com/) (to host the site for free).

---

## Repository Folder Structure
```
projeto-web-iniciante/        # Repository  
├── Criaturas_Paleo/          # Main folder  
│   ├── index.html            # Main page  
│   ├── src/                  # Main subfolder  
│       ├── css/              # Styling subfolder  
        ├── assets/           # Secondary subfolder  
│           ├── imagens/      # Image subfolder  
            ├── font/         # Font subfolder  
│       └── js/               # Interaction subfolder  
└── README.md
└── README_en.md
```

---

## Note

The project initially generated an error: the "index.js" file tried to access the "id" but returned a value of `null`. I had to include a reference to ".listagem" to ensure that the interactive clicks correctly selected the "id" values without errors. Although everything related to the "id" in the "index.html" file seemed correct, it wasn't working. I solved the issue by adding the reference and using logs to check.

---