
    
    const input =document.querySelector('input');
    var btns = document.querySelectorAll('button');

    for(var i = 0; i<btns.length; i++){

        btns[i].addEventListener('click',function(){
            let fontSizeIncress = 13

            if(input.value.length > 4){
                let fontsize = input.value.length + fontSizeIncress

                input.style.fontSize = `${fontsize}px`

                
               
            }

            let  calbtn = Number(this.innerHTML)

            if(this.innerHTML == '='){

                const fn = new Function(`return ${input.value}`)
                
                input.value = fn()
                
            }
            if(calbtn){
                input.value += calbtn;
            }else{

                if(this.innerHTML == '+/-'){

                    input.value = -input.value
                }

                if(this.innerHTML == 'AC'){
                    input.value = ''
                }

                if(this.innerHTML != '=' && this.innerHTML != 'AC' && this.innerHTML != '+/-' ){

                    input.value += this.innerHTML

                }
            }


            

        }
    
)}
