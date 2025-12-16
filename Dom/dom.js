let arvind = () => {
    // let aman = document.getElementById("aman");
    // // aman.innerHTML += "this text is from js ";
    // // in innerHTML we can use += to add text or content without removing the previous content.
    // in innerHTML we can use = to replace the previous content with new content.
    // in innerHTML we can use html tags also.


    let aman = document.querySelector("#aman");

    // aman.innerHTML = "this text is  from js ";
    let name = "arvind"
    aman.innerHTML = `this text is from js by ${name} `;
    aman.style.backgroundColor = "red"


}

let Hide=()=>{
    let para = document.querySelector('#str')
    para.style.display='none'
}

let Show = () => {
    let text = document.querySelector('#str')
    text.style.display="block"
}


let togg = ()=>{
    let okk = document.querySelector('#te')
    if(okk.style.display=='block'){
        okk.style.display='none'
    }
    else{
        okk.style.display='block'
        okk.style.back
    }

}


let image= ()=>{
    let img = document.querySelector('#img1')
    img.src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
}

