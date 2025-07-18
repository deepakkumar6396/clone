let input = document.querySelector(".login-input");
 let box2 = document.querySelector(".box1");
 let box1 = document.querySelector(".box");
 let input1 = document.querySelector(".login-input1");


function btn() {
    if(input.value) {
       
       let div = document.createElement("div");
       div.classList.add("sccefull");
       
       let h1 = document.createElement("h1");
       h1.innerHTML = "sccefull login";
       div.appendChild(h1);
       document.body.appendChild(div);
       
        
    }
    else{
        alert("Please enter your email or phone number");

    }
    
 }

 function signbtn (){

       box2.style.display = "block";
       box1.style.display = "none";


    
 }
 function signbtn1 (){
    if(input1.value){
       let div = document.createElement("div");
       div.classList.add("sccefull");
       
       let h1 = document.createElement("h1");
       h1.innerHTML = "sccefull sign in";
       div.appendChild(h1);
       document.body.appendChild(div);
       
    }  
    else{
        alert("Please enter your email or phone number");
    }
     
 }