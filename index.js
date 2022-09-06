fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json")
        .then(res => res.json())
        .then(data => console.log(data));
        document.getElementById("carros").innerHTML = data;

        











































































// let search = document.querySelector('.search-box');

// document.querySelector('#search-icon'); onclick = () =>{
//     search.classList.toggle('active');
//     menu.classList.replace('active');
// }

// let menu = document.querySelector('.nav-bar');

// document.querySelector('#menu-icon'); onclick = () =>{
//     menu.classList.toggle('active');
//     search.classList.remove('active');
//  }


// let header = document.querySelector('header');

// window.addEventListener('#scroll'), () => {
//     header.classList.toggle('shadow', window.scrollY > 0 );

// }

// let carInfo = {
//     result: function(carValue){
     
       
    
//     vehicleInfo: function(data){
//         const{Value} = data.object;
//         const{Brand} = data.object;
//         // const{Model} = data.object;
//         // const{Model Year} = data.object;
//         // const{Fuel} = data.object;
//         // const{Fipe code} = data.object;
//         const{mesReference} = data.object;
//         const{vehicleType} = data.object;
//         // const{Acronym Fuel} = data.object;

//         document.querySelector(".value ").innerText = Value;
//         }

//     }

//     document.querySelector(".btn1").addEventListener("click", function (){
//         carInfo.primary-Button()
//     })


    

