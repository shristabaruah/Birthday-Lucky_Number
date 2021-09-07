const dateOfbirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const CheckNumberButton = document.querySelector("#check-number");
const OtutputBox = document.querySelector("#output-box");

function CompareValues(sum,luckyNumber){
    if(sum%luckyNumber === 0){
        OtutputBox.innerText=("Your birthday is lucky");
    }else {
        OtutputBox.innerText=("Your birthday is not lucky");
    }

}

function CheckBirthdateisLucky(){
    const dob =dateOfbirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob)
    CompareValues(sum,luckyNumber.value)
    else
    OtutputBox.innerText=("please enter both the fields");
    
}


function calculateSum(dob){
   dob = dob.replaceAll("-","");
   let sum=0;
   for(let index=0 ; index<dob.length;index++){
       sum=sum + Number(dob.charAt(index));
   }
   return sum;
}

CheckNumberButton.addEventListener('click',CheckBirthdateisLucky);