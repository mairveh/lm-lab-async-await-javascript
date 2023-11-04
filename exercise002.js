import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData2 = async (apiEndPoint) => {
  const response = await fetch(apiEndPoint)
  const json = await response.json()
  try {
    console.log(json)
  }
  catch(err) {
    console.log(err)
  }
};

fetchData2(jsonTypicode);