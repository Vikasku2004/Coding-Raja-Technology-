//alert("wait")



// this form is gpoin to generating Cv

function generateCV() {
    /*console.log("Erroe check");*/
    let namefield=document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML= namefield;
    
    document.getElementById("nameT2").innerHTML=namefield;
    //contact,email and address

    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
 document.getElementById("mailT").innerHTML=document.getElementById("mailfield").value;

 document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;

 document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;

 document.getElementById("xT").innerHTML=document.getElementById("xtfield").value;

 document.getElementById("linkT").innerHTML=document.getElementById("linkedfield").value;

 document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;

//object field and work Experienc field
 document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefield").value;
 document.getElementById("wet").innerHTML=document.getElementById("workfield").value;
 
   

 //  qualification
 
 
 document.getElementById("aqT").innerHTML=document.getElementById("eqfield").value;

 document.getElementById("cv-form").style.display='none';
 document.getElementById("cv-template").style.display='block';

}
 // print Cv
 function printCV(){
    window.print();
 }