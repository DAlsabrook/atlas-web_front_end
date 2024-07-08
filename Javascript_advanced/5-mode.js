function changeMode(size, weight, transform, background, color) {
  return () => {
    const tags = ["p", "a", "h1", "h2", "h3", "li", "span", "input", "div", "body"];

    tags.forEach(tag => {
      const elements = document.getElementsByTagName(tag);
      // assign HTML collection to array
      Array.from(elements).forEach(element => {
        element.style.color = color;
        element.style.backgroundColor = background;
        element.style.fontSize = size;
        element.style.fontWeight = weight;
        element.style.textTransform = transform;
      });
    });
  };
}

function main () {
  // Create functions for each mode
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  // Create our buttons and text for mode chaning
  const paragraph = document.createElement("p");
  const spookyBtn = document.createElement("button");
  const darkBtn = document.createElement("button");
  const screamBtn = document.createElement("button");
  paragraph.innerHTML = "Welcome Holberton!";
  spookyBtn.innerHTML = "Spooky";
  darkBtn.innerHTML = "Dark mode";
  screamBtn.innerHTML = "Scream mode";
  document.body.appendChild(paragraph);
  document.body.appendChild(spookyBtn);
  document.body.appendChild(darkBtn);
  document.body.appendChild(screamBtn);

  // Button functionality
  spookyBtn.onclick = spooky;
  darkBtn.onclick = darkMode;
  screamBtn.onclick = screamMode;

}


main();
