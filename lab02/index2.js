const btn = document.querySelector("#sub");
btn.addEventListener('click' , () =>{
   const input =  document.querySelector("#input");
   const number = document.querySelector("#number")
   const result = document.querySelector("#result");
        const add = input.value;
        const value = number.value;
      if(value === '...'){
        result.innerHTML = add.substring(value , '.');
      }else{
        result.innerHTML = add.substring(value , '...');
      }
      

});