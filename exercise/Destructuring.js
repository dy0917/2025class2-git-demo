function displayComponent({ height = 200, width = 100, title, description }) {
  console.log(
    `<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`
  );
}

function displayComponent1(height = 200, width = 100, title, description) {
  console.log(
    `<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`
  );
}

const component = {
  height: 300,
  width: 200,
  title: "thistitle",
  description: "",
};

displayComponent(component);
