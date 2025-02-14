//http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=Paris&aqi=no

let searchField= document.querySelector('.searchField');

const form =document.querySelector("form")

form.addEventListener('submit',searchTarget)
let target='London'

function searchTarget(e){
    e.preventDefault()
    target=searchField.value
    fetchData(target)
}

async function fetchData(target){

   let response=await fetch(`http://api.weatherapi.com/v1/current.json?key=ef8196f7287c4935bc352958251002&q=${target}&aqi=no`)

   let data= await response.json();

   let location=response.location.name 
   
   let TandD=response.location.localtime

   let temp=response.current.temp_C

   console.log(location);
   console.log(TandD);
   console.log(temp);



}

fetchData(target)