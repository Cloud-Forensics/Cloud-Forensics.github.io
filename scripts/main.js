let myImage = document.querySelector("img");
myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image1.jpg") {
    myImage.setAttribute("src", "images/image2.jpg");
  } else if (mySrc === "images/image2.jpg") {
    myImage.setAttribute("src", "images/image3.jpg");
  } else {
    myImage.setAttribute("src", "images/image1.jpg");
  }
};

let myList = document.querySelector("#list");
let addButton = document.querySelector("#add-list-item");
addButton.onclick = function () {
  let new_li = document.createElement("li");
  new_li.textContent = "New Item";
  myList.appendChild(new_li);
};

let removeButton = document.querySelector("#remove-list-item");
removeButton.addEventListener("click", () => {
  let all_li = document.querySelectorAll("#list > li");
  all_li[all_li.length - 1].remove();
});
