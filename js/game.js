console.log("linked");
let y = Math.floor((Math.random()*100)+1);
console.log(y);
let guess=0;
var numguess = new Array(10);


document.querySelector('button').style.visibility='hidden';


document.getElementById("submitguess").onclick = function(){ 
    
     let x = document.getElementById("guessField").value;
    // for (var i= 0;i< 10; i++) {
    //     x[i] = document.getElementById("guessField").value;
    //     numguess[i]=x[i];
        
    // }
    // console.log(numguess)
    let user=Number(guessField.value)
 if(x<y) 
 {     
     guess++;
     document.querySelector('h2').textContent="Try a greater";
     
     if(guess==10){
         
        document.querySelector('h2').textContent="You lose";
        //alert("You lose");
        document.getElementById("guessField").disabled=true
        document.getElementById("submitguess").disabled=true
        document.querySelector('button').style.visibility='visible';
        //location.reload();
    }
     console.log(guess);
    
     document.querySelector('check').textContent="Wrong";
     document.getElementById("guessField").value="";
     autocursor();
 } 
 else if(x>y) 
 {     
     guess++;
     document.querySelector('h2').textContent="Try a smaller";
     if(guess==10){
        document.querySelector('h2').textContent="You lose";
        //alert("You lose");
        //location.reload();
    }
     console.log(guess);
     document.querySelector('check').textContent="Wrong";
     document.getElementById("guessField").value="";
     autocursor();
 } 
 else if(x==y)
 { 
     guess++;
     document.querySelector('h2').textContent="Congrat!!";
     console.log(guess);
     document.querySelector('check').textContent="Right";
     document.querySelector('button').style.visibility='visible';
     
 } 
 if(guess>0){
     
    document.querySelector('prevguess').textContent+=user+' ';
  
 }
 
}

function restart() {
    location.reload();
  }

function autocursor(){
    document.getElementById('guessField').focus();
    document.getElementById('guessField').select();
}