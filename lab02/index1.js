const btn = document.querySelector("#sub");
btn.addEventListener('click' , () =>{
   const input =  document.querySelector("#input");
   const result = document.querySelector("#result");
        const add = input.value;
     result.innerHTML = add.length;   

});