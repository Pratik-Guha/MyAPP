const generateMemeBtn = document.querySelector(".meme-gen-btn");
const memeImage = document.querySelector(".memegenaretor img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) => {
 
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
  
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        setTimeout(updateDetails,1500,data.url, data.title, data.author);
      
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
