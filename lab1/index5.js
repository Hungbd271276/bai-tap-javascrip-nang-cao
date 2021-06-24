const add = document.querySelector.bind(document);
add('#addclick').addEventListener('click', function(){
 const dta = add('#dt').value;
 const moth = add('#mot').value;
 const yed = add('#ye').value;
  
  add('h3')[0].innerHTML = dta + "-" + moth + "-" + yed;      
  add('h3')[1].innerHTML = dta + "/" + moth + "/" + yed;      
  add('h3')[2].innerHTML = dta + "." + moth + "." + yed;    
  add('h3')[3].innerHTML = dta + "," + moth + " " + yed;   
});