let setdata = () => {
  let name = "sid";
  localStorage.setItem("Myname", "zaki");
  localStorage.setItem("Myage", "25");
  location.reload;
};

let show = document.querySelector("#okk");
show.innerHTML = localStorage.getItem("Myname");
let Data = localStorage.getItem("Myname");
let newdata = JSON.parse(Data);
show.innerHTML = newdata.name;
let remdata = () => {
  localStorage.removeItem("Myname");
  location.reload();
};
