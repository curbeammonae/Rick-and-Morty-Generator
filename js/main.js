document.querySelector("button").addEventListener("click", generate);


function generate(){
let choice = document.querySelector("button").value
const url = `https://rickandmortyapi.com/api/character/${choice}`
fetch(url)
.then(res => res.json())
.then(data => {


console.log(data.results)
  
const arry = data.results

  //used the math floor & math random function to get random object
  const randomValue = arry[Math.floor(Math.random() * arry.length)];

  console.log(randomValue)//spits out random object 

document.querySelector('h2').innerHTML = randomValue.name //access name property of random object
  
  document.querySelector('h3').innerHTML = randomValue.status//access status property of random object
  document.querySelector('img').src = randomValue.image ////access image property of random object
 
  document.querySelector('h4').innerHTML = randomValue.species//access species property of random object
  
})
.catch(err => console.log(`error ${err}`))
}