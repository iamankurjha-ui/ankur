//fetch
//get
//asynchronous => async await => synchronous
//fetch => promise => pedning => fullfilled => resolved / rejected

let fetchData = async () => {
  let api = "https://jsonplaceholder.typicode.com/posts";
  let res = await fetch(api, { method: "GET" });
  let data = await res.json();
  console.log(data);

  let show = document.querySelector("#datashow");
  data.map((e) => {
    show.innerHTML += `
    <tr> </tr>
    <td> ${e.id} </td>
    <td> ${e.title} </td>
    <td> ${e.body} </td>
    </tr>
    `;
  });
};
fetchData();

function validateSignup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (name === "") {
    alert("Full Name is required.");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  alert("Sign up successful!");
  return true;
}

if (document.querySelector("#datashow")) {
  fetchData();
}
