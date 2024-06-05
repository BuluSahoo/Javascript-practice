function animator(animationClass) {
  const title = document.getElementById("title");
  title.className = animationClass;
}

function theme() {
  const section = document.getElementById("section");
  const title = document.getElementById("title");
  const suTitle = document.getElementById("sub-title");
  const sidebar = document.getElementById("sidebar")
  const button = document.getElementsByTagName('button')

  console.log(button.length)

  if (section.style.background == "black") {
    section.style.background = "#FCE5CD";
    title.style.color = "#351C75";
    suTitle.style.color = "#E69138";
    sidebar.style.background = "#F7D7B5"
    sidebar.style.color = "#000"
    for( let i=0; i<button.length; i++){
        button[i].style.color="black"
    }
  } else {
    section.style.background = "black";
    title.style.color = "#4672FE";
    suTitle.style.color = "#ccc";
    sidebar.style.background = "#15151D"
    sidebar.style.color = "#ccc"
    for( let i=0; i<button.length; i++){
        button[i].style.color="#ccc"
    }
  }
}
