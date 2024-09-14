$("#cat").click(async function (e) { 

    let cat =await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    let resault =await cat.json()
    displaycat(resault)
    console.log(2);
 
 });
 
 function displaycat(resault){
     let box=``
    let resl= resault.categories.length;
     for(let i=0;i<resl;i++){
         box +=`
         <div id="categories" class="categories  w-full h-screen  flex justify-center gap-6 bg-black ">
     <div class="group w-1/5 h-[150px] overflow-hidden">
         <img class="w-full h-full" src="${resault.categories[i].strCategoryThumb}" alt="ss">
         <div class="bg-opacity-60 bg-slate-200 text-center h-full w-full relative group-hover:translate-y-[-140px] duration-1000">
             <p class="font-bold text-2xl">$${resault.categories[i].strCategory}</p>
             <p>${resault.categories[i].strCategoryDescription}</p>
         </div>
     </div>
 </div>
         `
     }
     document.getElementById('name').innerHTML=box
 }