import fetch from "node-fetch";

const jsonTypicode = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11145";

const fetchData2 = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint)
    const json = await response.json()
    const instructions = await json.drinks[0].strInstructions
    console.log(`Old Fashioned instructions: ${instructions}`)
  }
  catch(err) {
    console.log(err)
  }
};

fetchData2(jsonTypicode);