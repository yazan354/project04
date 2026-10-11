# Chapter IV — Personal Portfolio (Exercise 00)

## Overview
A fully responsive, pure HTML5/CSS3/JavaScript personal portfolio built from scratch without external frameworks or libraries[cite: 1]. The portfolio showcases technical skills, projects, hobbies, and a contact form with complete theme customization capabilities[cite: 1].

## Project Structure
- `index.html` - Semantic structure containing Navbar, About, Skills, Projects, Hobbies, and Contact sections[cite: 1].
- `style.css` - Pure CSS3 styling using Flexbox, CSS variables, dark/light themes, and responsive media queries[cite: 1].
- `script.js` - JavaScript ES6+ logic handling dynamic theme toggling[cite: 1].
- `assets/` - Directory for media assets including profile photos[cite: 1].
- `README.md` - Technical documentation and event lifecycle explanation[cite: 1].

## Event Lifecycle & Technical Explanation
1. **User Action**: The user clicks the "Toggle Theme" button (`#theme-toggle`)[cite: 1].
2. **Event Dispatching**: The browser intercepts the physical user click and fires a `'click'` event[cite: 1].
3. **Event Listening**: The registered callback in `script.js` listens for the click event on the button DOM node[cite: 1].
4. **DOM Mutation**: JavaScript toggles the `.dark-theme` class on `document.body`[cite: 1].
5. **CSS Repaint**: CSS custom variables update immediately, smoothly altering background colors, card backgrounds, borders, and text colors without page reloads[cite: 1].
