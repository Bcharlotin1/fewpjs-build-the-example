// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const articalsObject =  document.getElementsByClassName('media-post')
const articalsArray = Object.values(articalsObject)


 const heartArray = document.querySelectorAll(".like-glyph")
console.log(heartArray)
heartArray.forEach(heart =>{

  heart.addEventListener("click", (event)=>{
 
    if (event.target.innerText === EMPTY_HEART){
      mimicServerCall()
      .then(resp =>{
        document.getElementById("modal").className = ""
        document.getElementById("modal").innerText = `${resp}`
      })
  
      event.target.className = "activated-heart"
      event.target.innerText = 
        `${FULL_HEART}`
    }

    else {
      mimicServerCall()
      .then(resp =>{
        document.getElementById("modal").className = "hidden"
        document.getElementById("modal").innerText = "error!"
      })
      event.target.className = "like-glyph"
      event.target.innerText = 
      `${EMPTY_HEART}`
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
      console.log(isRandomFailure)
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
