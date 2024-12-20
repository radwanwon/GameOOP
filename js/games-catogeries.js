
import {Ui} from './ui.js'
import {Details} from './deails.js'


export class GamesCategory{


constructor(){
this.disPlay=new Ui()
this.loading= document.querySelector(".loading")
this.category= document.querySelector(".catogery")
this.details=document.querySelector(".details")


document.querySelector("ul").addEventListener("click",(e)=>{
 const clicked=e.target.closest(".nav-link")
 if (!clicked) return
//  active class 
document.querySelectorAll(".nav-link").forEach(link=>link.classList.remove("active"))
clicked.classList.add("active")

// get tha data category and display
 this.fetchDataAndDisplay(clicked.innerText)

})
// defalut link ==>fetch and display it 
this.fetchDataAndDisplay('mmorpg')



}

// fetching 
   async fetchDataAndDisplay(link){
    // removimg loading 
       this.loading.classList.remove("d-none")
    const options = {
        method: 'GET',
        headers: {
            "x-rapidapi-key": "a9b2a9c5c2msh8daa0cba6e8756bp14ca82jsnb38ff57930c3",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        }
    };
        let res=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${link}`,options)
        let data=await res.json()
        this.loading.classList.add("d-none")
        // display categories
        this.disPlay.disPlayCatogery(data)
        // addevent listenter to the cards after displaying them 
        this.cardEventListenters()
      
    }
 
    cardEventListenters(){
          // eventlistenter to the cards to makke instance to the details class
          document.querySelectorAll('.card').forEach(card=>card.addEventListener("click",()=>{
            this.category.classList.add("d-none")
            this.details.classList.remove("d-none")
            new Details().getDtails(card.id);
          
          }))
    }
}