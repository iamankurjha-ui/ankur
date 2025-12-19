let satya=()=>{
    let newtag = document.querySelector('#ok')
    let btn = document.querySelector('#btn')

    if ( newtag.style.display == "none"){
        newtag.style.display="block"
        btn.innerHTML="Hide"
    }
    else
    {
        newtag.style.display="none"
        btn.innerHTML="Show"
    }
}