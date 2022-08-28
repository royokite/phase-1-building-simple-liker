// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Simple liker build!
const likeHeart = document.querySelectorAll('.like-glyph');

function likeActivity(event) {
  const heart = event.target;
  // console.log(heart);
  mimicServerCall()
    .then(() => {
      if (heart.getAttribute('class')==='like-glyph activated-heart') {
        // console.log('remove like');
        heart.setAttribute('class', 'like-glyph');
      } else {
        // console.log('add like');
        heart.setAttribute('class', 'like-glyph activated-heart')
      }
    })
    .catch(() => {
      const errorBanner = document.getElementById('modal');
      document.getElementById('modal-message').innerHTML = `<em>NOTICE: YOU DONE GOOFED UP!!!</em>`
      errorBanner.removeAttribute('class');
      setTimeout(() => errorBanner.setAttribute('class', 'hidden'), 3000)
    })
}

likeHeart.forEach(heart => {
  heart.addEventListener('click', likeActivity)
})





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
