let counter = document.getElementById("countervalue");

function onIncrement(){
  let prev_val = counter.textContent ;
  let updated_val = parseInt(prev_val) + 1 ;
  counter.textContent = updated_val ; 

  if (updated_val > 0){
    counter.style.color = "green";
  }
  else if(updated_val < 0){
    counter.style.color = "red";

  }
  else {
    counter.style.color = "black"
  }

}

function onDerement() {
  let prev_val = counter.textContent ;
  let updated_val = parseInt(prev_val) - 1 ;
  counter.textContent = updated_val ; 

  if (updated_val > 0){
    counter.style.color = "green";
  }
  else if(updated_val < 0){
    counter.style.color = "red";

  }
  else {
    counter.style.color = "black"
  }

}

function onReset(){
  
  let updated_val =  0 ;
  counter.textContent = updated_val ; 

  if (updated_val > 0){
    counter.style.color = "green";
  }
  else if(updated_val < 0){
    counter.style.color = "red";

  }
  else {
    counter.style.color = "black"
  }

}