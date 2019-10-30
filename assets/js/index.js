function valid(){
        
    var age =  document.getElementById("age").value;
    
    if (isNaN(age)){
        alert("Veuillez saisir un nombre")

    }
    else{
        if (age >= 18){
            alert("Vous êtes majeur.")
        }
        else
        {
            alert("Vous êtes mineur.")
        }
        
    }
    
} 
  