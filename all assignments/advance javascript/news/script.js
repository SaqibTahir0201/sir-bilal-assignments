async function getData() {
  console.log("login");
  let api = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2024-07-11&to=2024-07-11&sortBy=popularity&apiKey=020bea5e93db4d1a85f33a556b0659d2"
  );
  console.log(api);

  let data = await api.json();
  console.log(data);
  
  console.log(data.articles[0]);

  return data;


}

getData();
