import regeneratorRuntime from "regenerator-runtime";

async function getData() {
  const response = await fetch('../result_data.json');
  const data = await response.json();

  return data
}

const data = getData();

data.then(item => {
  console.log(item)
})
