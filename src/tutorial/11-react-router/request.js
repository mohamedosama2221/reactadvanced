const getTodo = (callback) => {
  const request = new XMLHttpRequest();
  //prepare the request

  request.onreadystatechange = () => {
    if (request.status === 4 && request.readyState === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 200) {
      callback("couldn't fetch data", undefined);
    }
  };
  request.open("GET", "http");

  request.send();
};

getTodo((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fetch("the api that we want ot fetch")
  .then((res) => {
    console.log(res.json());
    return res.json(); //return a promise
  })
  .then((data) => {
    //data  = the return from the prev chain (res.json())
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("run after error");
  });

//using async await

const fetching = async () => {
  const fetchRes = await fetch("my api");
  const data = await fetchRes.json();
  return data;
};

fetching().then((data) => console.log(data)); //fetching() is return a promise so you need to take that data and chain it to be able to use it
