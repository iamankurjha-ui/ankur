// remove duplicates elements from an array 
let arr = [1,2,3,2,3,4,5,6]
let uniqarr = [...new Set(arr)];
console.log(uniqarr)

//2 use map function to show this data in tabular form 
const student = [{rollno :101,
    name :"sachin",
    city :"bhopal"
}]
  let show = document.querySelector("#datashow");
  show.innerHTML = `<tr><th>Roll No</th><th>Name</th><th>City</th></tr>`;
  student.map((e) => {
    show.innerHTML += `
    <tr>
    <td> ${e.rollno} </td>
    <td> ${e.name} </td>
    <td> ${e.city} </td>
    </tr>
    `;
  });

  //3
  
  var add = ()=>{
    var a = document.querySelector("#sub").value
    var h = document.querySelector("#h1")
    h.innerHTML += a + "<br>"
  }


//4