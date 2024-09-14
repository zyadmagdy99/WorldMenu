$('#bar').click(function () { 
    let innerbarrw= $(".innerbar").outerWidth();
    let innerbarrl= $(".innerbar").offset().left;
    if(innerbarrl===0){
    
        $(".navbar").css({
            left:-`${innerbarrw}`,
            transition:'left 1s'
        });
        $("#x").addClass('fa-bars');
        $("#x").removeClass('fa-x');
    }else{
        $(".navbar").css({
            left:`0px`,
            transition:'left 1s'

        });
        $("#x").removeClass('fa-bars');
        $("#x").addClass('fa-x');
    }
   
    
});

    $(".navu").click(function (e) {
        e.preventDefault(); 
        let sectionid = $(this).attr('href');   

        $(sectionid).removeClass("hidden");

        $(this).siblings(".navu").each(function() {
            let siblingSectionId = $(this).attr('href');
            $(siblingSectionId).addClass("hidden");
        });
        console.log(5);
    });
   
    $(document).ready(async function() {
        let cat =await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        let resault =await cat.json()
        displaycat(resault)
        });
        
    $("#cat").click(async function (e) { 

        let cat =await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        let resault =await cat.json()
        displaycat(resault)
     });
     
     function displaycat(resault){
         let box=``
        let resl= resault.categories.length;
         for(let i=0;i<resl;i++){
             box +=`
             
         <div class="group category w-1/5 h-[190px] overflow-hidden hover:cursor-pointer">
             <img class="w-full h-full" src="${resault.categories[i].strCategoryThumb}" alt="ss">
             <div class="bg-opacity-60 bg-slate-200 text-center h-full w-full relative group-hover:translate-y-[-190px] duration-500">
                 <h class="font-bold text-2xl">${resault.categories[i].strCategory}</h>
                 <p class='line-clamp-4'>${resault.categories[i].strCategoryDescription}</p>
             </div>
         </div>
     
             `

         }
         document.getElementById('categories').innerHTML=box
         
     }

     $(document).ready(async function() {
        await displaycat();
    });
     

    $("#in").click(async function (e) { 

        let cat =await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
        let resault =await cat.json()
        displayin(resault)
        console.log(2);
     
     });
     
     function displayin(resault){
         let box=``
        let resl= resault.meals.length;
        console.log(resl);
         for(let i=0;i<24;i++){
             box +=`
             
        <div class="unit ingredient w-1/5 h-[200px] flex flex-col mt-4 ms-4 justify-center items-center text-white bg-black">
            <i class="fa-solid fa-drumstick-bite fa-4x "></i>
            <h class="font-bold text-2xl">${resault.meals[i].strIngredient}</h>
            <p class='line-clamp-3'>${resault.meals[i].strDescription}</p>
        </div>
     
             `
         }
         document.getElementById('ingredient').innerHTML=box
     }
    $("#areaa").click(async function (e) { 

        let cat =await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        let resault =await cat.json()
        displayar(resault)
        console.log(2);
     
     });
     
     function displayar(resault){ 
         let box=``
        let resl= resault.meals.length;
        console.log(resl);
         for(let i=0;i<resl;i++){
             box +=`
             
       <div class="area ar text-white size-36 flex flex-col justify-center items-center w-1/5">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h1 class="font-bold text-2xl">${resault.meals[i].strArea}</h1>
        </div>
     
             `
         }
         document.getElementById('area').innerHTML=box
     }
     
    $("#nameo").keypress(async function (e) { 
        let name=this.value
        console.log(name);
        let cat =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        let resault =await cat.json()
        displaybyname(resault)
     });
     
     function displaybyname(resault){ 
         let box=``
        let resl= resault.meals.length;
         for(let i=0;i<resl;i++){
             box +=`
         <div class="group fname w-1/5 h-[200px] overflow-hidden bg-white " data-id="${resault.meals[i].idMeal}">
         <img class="w-full h-full" src="${resault.meals[i].strMealThumb}" alt="ss">
         <div class="bg-opacity-60 bg-slate-200 text-center flex justify-start items-center h-full w-full relative group-hover:translate-y-[-180px] duration-500">
             <p class="font-bold text-2xl ms-4">${resault.meals[i].strMeal}</p>
         </div>
     </div>
             `
         }
         document.getElementById('namee').innerHTML=box
     }

     $("#fletter").on('input', async function (e) {
        let name = this.value.trim().charAt(0);  
        console.log(name);
    
        if (name.length > 0) {
            
                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`);
                let result = await response.json();
                displaybyl(result);
            }
         else {
            document.getElementById('namee').innerHTML = '';
        }
    });
    
    function displaybyl(result) {
        console.log(56);
        let box = '';
    
        if (result.meals) {
            let mealsLength = result.meals.length;
            for (let i = 0; i < mealsLength; i++) {
                box += `
                    <div class="group flet w-1/5 h-[200px] overflow-hidden bg-white hover:cursor-pointer" data-id="${result.meals[i].idMeal}">
                        <img class="w-full h-full" src="${result.meals[i].strMealThumb}" alt="${result.meals[i].strMeal}">
                        <div class="bg-opacity-60 bg-slate-200 text-center flex justify-start items-center h-full w-full relative group-hover:translate-y-[-180px] duration-500">
                            <p class="font-bold text-2xl ms-4">${result.meals[i].strMeal}</p>
                        </div>
                    </div>
                `;
            }
        } else {
            box = '<p class="text-white text-xl">No meals found</p>';
        }
    
        document.getElementById('namee').innerHTML = box;
    }
    

    $(document).on('click', '.group',cat2)
        async function cat2 () {
            let name=$(this).find('h').text();
        let cat2 =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        let resault2 =await cat2.json()
        displaycat2(resault2)
    };
    function displaycat2(resault2){
        let box=``
       let resl= resault2.meals.length;
        for(let i=0;i<resl;i++){
            box +=`
            
        <div class="group innercat w-1/5 h-[250px] overflow-hidden hover:cursor-pointer" data-id="${resault2.meals[i].idMeal}">
            <img class="w-full h-full" src="${resault2.meals[i].strMealThumb}" alt="ss">
            <div class="bg-opacity-60 bg-slate-200 flex justify-start items-center h-full w-full relative group-hover:translate-y-[-250px] duration-500">
                <p class="font-bold ms-6 text-2xl">${resault2.meals[i].strMeal}</p>
                
            </div>
        </div>
    
            `
        }
        document.getElementById('categories').innerHTML=box
        
    }

    $(document).on('click', '.innercat',cat3)
        async function cat3 () {
            let mealId = $(this).data('id');
            console.log(mealId);
        let cat3 =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        let resault2 =await cat3.json()
       displaycat3(resault2)

    };

    

    function displaycat3(resault2){
        let box=``
            box +=`
            <div id="instructions" class="instructions w-full  bg-black text-white flex justify-center items-start gap-5 mt-7">
    <div class="left flex flex-col justify-start items-center w-1/4">
        <img class="w-full" src="${resault2.meals[0].strMealThumb}" alt="s">
        <p class="text-2xl font-bold">${resault2.meals[0].strMeal}</p>
    </div>
    <div class="right w-3/5 flex flex-col">
        <h1 class="text-4xl font-bold mb-4">instructions</h1>
        <p>${resault2.meals[0].strInstructions}</p>
        <p class="text-4xl font-bold mt-4">Area: ${resault2.meals[0].strArea}</p>
        <p class="text-4xl font-bold mt-4">Category:${resault2.meals[0].strCategory}</p>
        <p class="text-4xl font-bold mt-4">recipes:</p>
        <div class="w-full flex flex-wrap gap-5 mb-8">
            <div class="bg-sky-300  rounded-lg flex justify-center items-center p-3 ms-3 mt-4">${resault2.meals[0].strIngredient1}</div>
            <div class="bg-sky-300  rounded-lg flex justify-center items-center p-3 ms-3 mt-4">${resault2.meals[0].strIngredient2}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient3}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient4}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient5}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient6}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient7}</div>
        </div>
        

    </div>

</div>
         
        `
        document.getElementById('categories').innerHTML=box

        }

















        $(document).on('click','.area',ar2)
        async function ar2 () {
            let name=$(this).find('h1').text();
        let ar =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
        let resault2 =await ar.json()
        displayar2(resault2)
    };
    function displayar2(resault2){
        let box=``;
       let resl= resault2.meals.length;
        for(let i=0;i<resl;i++){
            box +=`
            
        <div class="group area4 w-1/5 h-[250px] overflow-hidden hover:cursor-pointer" data-id="${resault2.meals[i].idMeal}">
            <img class="w-full h-full" src="${resault2.meals[i].strMealThumb}" alt="ss">
            <div class="bg-opacity-60 bg-slate-200 flex justify-start items-center h-full w-full relative group-hover:translate-y-[-250px] duration-500">
                <p class="font-bold ms-6 text-2xl">${resault2.meals[i].strMeal}</p>
                
            </div>
        </div>
    
            `
        }
        document.getElementById('area').innerHTML=box
        
    }

    $(document).on('click', '.area4',area3)
        async function area3 () {
            let mealId = $(this).data('id');
            console.log(mealId);
        let area3 =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        let resault2 =await area3.json()
       displayarea3(resault2)

    };

    

    function displayarea3(resault2){
        let box=``
            box +=`
            <div id="instructions" class="instructions w-full  bg-black text-white flex justify-center items-start gap-5 mt-7">
    <div class="left flex flex-col justify-start items-center w-1/4">
        <img class="w-full" src="${resault2.meals[0].strMealThumb}" alt="s">
        <p class="text-2xl font-bold">${resault2.meals[0].strMeal}</p>
    </div>
    <div class="right w-3/5 flex flex-col">
        <h1 class="text-4xl font-bold mb-4">instructions</h1>
        <p>${resault2.meals[0].strInstructions}</p>
        <p class="text-4xl font-bold mt-4">Area: ${resault2.meals[0].strArea}</p>
        <p class="text-4xl font-bold mt-4">Category:${resault2.meals[0].strCategory}</p>
        <p class="text-4xl font-bold mt-4">recipes:</p>
        <div class="w-full flex flex-wrap gap-5 mb-8">
            <div class="bg-sky-300  rounded-lg flex justify-center items-center p-3 ms-3 mt-4">${resault2.meals[0].strIngredient1}</div>
            <div class="bg-sky-300  rounded-lg flex justify-center items-center p-3 ms-3 mt-4">${resault2.meals[0].strIngredient2}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient3}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient4}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient5}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient6}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient7}</div>
        </div>
        

    </div>

</div>
         
        `
        document.getElementById('area').innerHTML=box

        }











        
        $(document).on('click','.unit',in2)
        async function in2 () {
            let name=$(this).find('h').text();
        let ar =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
        let resault2 =await ar.json()
        ing2(resault2)
    };
    function ing2(resault2){
        let box=``;
       let resl= resault2.meals.length;
        for(let i=0;i<resl;i++){
            box +=`
            
        <div class="group ing4 w-[250px] h-[250px] overflow-hidden hover:cursor-pointer ms-9 mt-9" data-id="${resault2.meals[i].idMeal}">
            <img class="w-full h-full" src="${resault2.meals[i].strMealThumb}" alt="ss">
            <div class="bg-opacity-60 bg-slate-200 flex justify-start items-center h-full w-full relative group-hover:translate-y-[-250px] duration-500">
                <p class="font-bold ms-6 text-2xl">${resault2.meals[i].strMeal}</p>
                
            </div>
        </div>
    
            `
        }
        document.getElementById('ingredient').innerHTML=box
        
    }

    $(document).on('click', '.ing4',ingred3)
        async function ingred3 () {
            let mealId = $(this).data('id');
            console.log(mealId);
        let ingred3 =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        let resault2 =await ingred3.json()
       displayin3(resault2)

    };

    

    function displayin3(resault2){
        let box=``
            box +=`
            <div id="instructions" class="instructions w-full  bg-black text-white flex justify-center items-start gap-3 mt-7">
    <div class="left flex flex-col justify-start items-center w-1/4 mt-6">
        <img class="w-full" src="${resault2.meals[0].strMealThumb}" alt="s">
        <p class="text-2xl font-bold">${resault2.meals[0].strMeal}</p>
    </div>
    <div class="right w-3/5 flex flex-col">
        <h1 class="text-4xl font-bold mb-4">instructions</h1>
        <p>${resault2.meals[0].strInstructions}</p>
        <p class="text-4xl font-bold mt-4">Area: ${resault2.meals[0].strArea}</p>
        <p class="text-4xl font-bold mt-4">Category:${resault2.meals[0].strCategory}</p>
        <p class="text-4xl font-bold mt-4">recipes:</p>
        <div class="w-full flex flex-wrap gap-5 mb-8">
            <div class="bg-sky-300  rounded-lg flex justify-center items-center p-3 ms-3 mt-4">${resault2.meals[0].strIngredient1}</div>
            <div class="bg-sky-300  rounded-lg flex justify-center items-center p-3 ms-3 mt-4">${resault2.meals[0].strIngredient2}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient3}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient4}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient5}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient6}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient7}</div>
        </div>
        

    </div>

</div>
         
        `
        document.getElementById('ingredient').innerHTML=box

        }















    $(document).on('click', '.fname',fname2)
        async function fname2 () {
            let mealId = $(this).data('id');
            console.log(mealId);
        let ingred3 =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        let resault2 =await ingred3.json()
       fname3(resault2)

    };

    

    function fname3(resault2){
        let box=``
            box +=`
            <div id="instructions" class="instructions w-full  bg-black text-white flex justify-center items-start gap-3 mt-7">
    <div class="left flex flex-col justify-start items-center w-1/4 mt-6">
        <img class="w-full" src="${resault2.meals[0].strMealThumb}" alt="s">
        <p class="text-2xl font-bold">${resault2.meals[0].strMeal}</p>
    </div>
    <div class="right w-3/5 flex flex-col">
        <h1 class="text-4xl font-bold mb-4">instructions</h1>
        <p>${resault2.meals[0].strInstructions}</p>
        <p class="text-4xl font-bold mt-4">Area: ${resault2.meals[0].strArea}</p>
        <p class="text-4xl font-bold mt-4">Category:${resault2.meals[0].strCategory}</p>
        <p class="text-4xl font-bold mt-4">recipes:</p>
        <div class="w-full flex flex-wrap gap-5 mb-8">
            <div class="bg-sky-300  rounded-lg flex justify-center items-center p-3 ms-3 mt-4">${resault2.meals[0].strIngredient1}</div>
            <div class="bg-sky-300  rounded-lg flex justify-center items-center p-3 ms-3 mt-4">${resault2.meals[0].strIngredient2}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient3}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient4}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient5}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient6}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient7}</div>
        </div>
        

    </div>

</div>
         
        `
        document.getElementById('namee').innerHTML=box

        }


    $(document).on('click', '.flet',flet)
        async function flet () {
            let mealId = $(this).data('id');
            console.log(mealId);
        let ingred3 =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        let resault2 =await ingred3.json()
       flet2(resault2)

    };

    

    function flet2(resault2){
        let box=``
            box +=`
            <div id="instructions" class="instructions w-full  bg-black text-white flex justify-center items-start gap-3 mt-7">
    <div class="left flex flex-col justify-start items-center w-1/4 mt-6">
        <img class="w-full" src="${resault2.meals[0].strMealThumb}" alt="s">
        <p class="text-2xl font-bold">${resault2.meals[0].strMeal}</p>
    </div>
    <div class="right w-3/5 flex flex-col">
        <h1 class="text-4xl font-bold mb-4">instructions</h1>
        <p>${resault2.meals[0].strInstructions}</p>
        <p class="text-4xl font-bold mt-4">Area: ${resault2.meals[0].strArea}</p>
        <p class="text-4xl font-bold mt-4">Category:${resault2.meals[0].strCategory}</p>
        <p class="text-4xl font-bold mt-4">recipes:</p>
        <div class="w-full flex flex-wrap gap-5 mb-8">
            <div class="bg-sky-300  rounded-lg flex justify-center items-center p-3 ms-3 mt-4">${resault2.meals[0].strIngredient1}</div>
            <div class="bg-sky-300  rounded-lg flex justify-center items-center p-3 ms-3 mt-4">${resault2.meals[0].strIngredient2}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient3}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient4}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient5}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient6}</div>
            <div class="bg-sky-300 p-3 ms-3 rounded-lg flex justify-center items-center mt-4">${resault2.meals[0].strIngredient7}</div>
        </div>
        

    </div>

</div>
         
        `
        document.getElementById('namee').innerHTML=box

        }




/////////////////////////////////////////////////////////////////
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const phone = document.getElementById('phone').value.trim();
const age = document.getElementById('age').value.trim();
const password = document.getElementById('password').value.trim();
const repassword = document.getElementById('repassword').value.trim();



$('#email').on('input', function(e) { 
    const email = document.getElementById('email').value.trim();
    let emailrx=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

    if(emailrx.test(email))
    {
        $("#emailError").addClass("hidden");
    }else if(email===""){
        $("#emailError").addClass("hidden");

    }
    else{
        $("#emailError").removeClass("hidden");

    }

});
$('#phone').on('input', function(e) { 
    const phone = document.getElementById('phone').value.trim();
let phonerx=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if(phonerx.test(phone))
    {
        $("#phoneError").addClass("hidden");
    }else if(phone===""){
        $("#phoneError").addClass("hidden");

    }else{
        $("#phoneError").removeClass("hidden");

    }

});
$('#password').on('input', function(e) { 
    const password = document.getElementById('password').value.trim();
    let passrx=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/

    if(passrx.test(password))
    {
        $("#passwordError").addClass("hidden");
    }else if(password===""){
        $("#passwordError").addClass("hidden");

    }else{
        $("#passwordError").removeClass("hidden");

    }

});
$('#name').on('input', function(e) { 
    const name = document.getElementById('name').value.trim();


    if(name.length > 3 && name.length < 20 )
    {
        $("#nameError").addClass("hidden");
    }else if(name===""){
        $("#nameError").addClass("hidden");

    }else{
        $("#nameError").removeClass("hidden");

    }

});
$('#age').on('input', function(e) { 
    const age = document.getElementById('age').value.trim();


    if(age > 16 && age < 100 )
    {
        $("#ageError").addClass("hidden");
    }else if(age===""){
        $("#ageError").addClass("hidden");

    }else{
        $("#ageError").removeClass("hidden");

    }}
)
$('#repassword').on('input', function(e) { 
    const repassword = document.getElementById('repassword').value.trim();
    const password = document.getElementById('password').value.trim();



    if(password===repassword)
    {
        $("#repasswordError").addClass("hidden");
    }else{
        $("#repasswordError").removeClass("hidden");

    }

});