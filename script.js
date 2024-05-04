let name1 = document.querySelector(".firstName");
        let name2 = document.querySelector(".secondName");
        let button = document.querySelector(".but");
        let msg = document.querySelector(".msg");
        let msgNames = document.querySelector(".OurNames");
        let ourLove = document.querySelector(".OurLove");
        let msgContainer = document.querySelector(".masgContainer");
        let reset = document.querySelector(".reset");
        let msg1 = document.querySelector(".msg1");
        let msg2 = document.querySelector(".msg2");
        let msg3 = document.querySelector(".msg3");
        


         function loveCalc(){
            let lovePercentages = Math.floor(Math.random()*99 +1);
            return lovePercentages;
            }
       
        button.addEventListener("click",()=>{  
            addText();
            })
        
        reset.addEventListener("click", (boom)=>{
            msgContainer.classList.add("hide");
            button.disabled = false;
            })

        function addText(){
            let boom = loveCalc();
            msgContainer.classList.remove("hide");
            msgNames.innerHTML = name1.value+" & " +name2.value;
            msg.classList.remove("pop");

            if(boom <= 30) {
                console.log(boom);
                msg.style.backgroundImage = 'url("sad.avif")';
                ourLove.innerText =` ${boom}% You Go Together Like Oil and water` ;
            }
             else if(boom >30 && boom<=70 ){ 
                ourLove.innerText = ` ${boom} `;
                msg.style.backgroundImage="url('normal.avif')";

            } 
            else if (boom > 70){
                msg.style.backgroundImage='url("happy.avif")';
                ourLove.innerText = ` ${boom}% You Love each Other Like Romeo Loved Juliet`;
            }

            button.disabled = true;
        }

        
     


