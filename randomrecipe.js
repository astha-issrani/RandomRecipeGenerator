let url = "https://www.themealdb.com/api/json/v1/1/random.php"; 
let btn = document.querySelector("#button");

btn.addEventListener("click", async () => {
   let getf = await getfact(); 
   console.log(getf);
   let p=document.querySelector("#res");
   p.innerText=getf;
});

async function getfact() {
    try {
        let res = await axios.get(url);
        const meal = res.data.meals[0]; 
        return `Meal: ${meal.strMeal}\nCategory: ${meal.strCategory}\nInstructions: ${meal.strInstructions}`;
    } catch (error) {
        console.log("Error:", error);
        return "No food fact found";
    }
}
