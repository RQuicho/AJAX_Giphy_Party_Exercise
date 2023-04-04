console.log("Let's get this party started!");

// uses async and axios to get gif from api
async function getGif(searchTerm) {
  const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
  console.log(res);

  // append searched gif to web page
  const div = document.querySelector('div');
  const newDiv = document.createElement('div');
  const newImg = document.createElement('img');

  const dataLength = res.data.data.length;
  const randNum = Math.floor(Math.random() * dataLength)
  const gifUrl = res.data.data[randNum].images.original.url;

  newImg.src = gifUrl;
  newDiv.classList.add('newGif');
  newDiv.append(newImg);
  div.append(newDiv);

}

// when user types word and submits form, getGif is called
const form = document.querySelector('form');
const userSearch = document.querySelector('#search');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  getGif(userSearch.value);
  userSearch.value = '';
});

// remove all gifs when button is clicked
const removeBtn = document.querySelector('#removeBtn');
const gifContainer = document.querySelector('.gifContainer');
removeBtn.addEventListener('click', function(e) {
  gifContainer.innerHTML = '';
  // gifContainer.removeChild(document.querySelector('.newGif'));
});
