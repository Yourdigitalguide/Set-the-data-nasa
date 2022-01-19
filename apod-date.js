//This gets the date from search bar to be used later


let searchButton = document.querySelector("#search")

//Adds an event listener to the button to fetch data when pressed
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  Go_Fetch()
})

//Nasa API link
let Url = "https://api.nasa.gov/planetary/apod?";
// API_KEY
let API_KEY = "api_key=JLVOmaZyQhnfzZSriIs19oXSKYMXwyUujChQ1TuQ";
// Selected Date
let DateRequest = "&date="
// Full Request
let request = Url + API_KEY + DateRequest;
  //Fetchs data from the NASA API.
  async function Go_Fetch(){

    let response = await fetch(request);
  console.log(response)

  let data = await response.json()
  SpaceShot(data)
}


//function that shows the pictures and details
function SpaceShot(data){



    document.querySelector("#content").innerHTML += `<img src="${data.url}">`

    document.querySelector("#content").innerHTML += data.title

    document.querySelector("#content").innerHTML += data.date

    document.querySelector("#content").innerHTML += data.explanation




}
