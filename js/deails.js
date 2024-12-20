
import {Ui} from './ui.js'


export class Details{

    constructor(){
        this.uidisplayDtails=new Ui()
        this.category= document.querySelector(".catogery")
        this.details=document.querySelector(".details")
        this.loading= document.querySelector(".loading")
        this.closeBtn=document.querySelector(".details i")




// close btn
this.closeBtn.addEventListener("click",()=>{
    this.category.classList.remove("d-none")
    this.details.classList.add("d-none")
})


}


// fetch deatiles data and desplay
    async getDtails (id){
        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                "x-rapidapi-key": "a9b2a9c5c2msh8daa0cba6e8756bp14ca82jsnb38ff57930c3",
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                }
            };
        let res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
        let data =await res.json()
        this.loading.classList.add("d-none")
        // display details
        this.uidisplayDtails.displayDetails(data)
        }
    
    
}