// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const articalsObject =  document.getElementsByClassName('media-post')
const articalsArray = Object.values(articalsObject)


articalsArray.forEach(article =>{
  article.addEventListener("click", (event)=>{
    
    if (event.target.innerText === EMPTY_HEART){
  
      event.target.className = "activated-heart"
      event.target.innerText = 
        `
          ${FULL_HEART}
        `

    }

    if (event.target.innerText === FULL_HEART){
      debugger
      event.target.className = "like-glyph"
      event.target.innerText = 
      `
      ${EMPTY_HEART}
      `
    
    }
   })
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
