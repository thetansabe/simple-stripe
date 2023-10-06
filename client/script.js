const button = document.querySelector("button")
button.addEventListener("click", () => {
  //save purchase state
  // const purchaseState.save({
  //   learnerId : 'abc', //get from user state
  //   items: [ {id: 1, quantity: 3}],
  // })


  fetch("http://localhost:3000/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then(res => {
      console.log(res);
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch(e => {
      console.error(e.error)
      //pop up fail message
    })
})
