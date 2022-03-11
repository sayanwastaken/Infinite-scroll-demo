let count=1

function renderStudents(){ 
    let div=document.getElementById("scrollDiv");
    let base=count+25
    for(let i=count;i<base;i++){
        
        let h1=document.createElement("h1");
        h1.innerText=`Masai Student ${i}`;
        div.append(h1);
    }
    count=count+25
}

window.addEventListener("load",()=>{
    renderStudents()
})

document.getElementById("scrollDiv").addEventListener("scroll",()=>{
    const contDiv=document.getElementById("scrollDiv")

    const scrlHeight=contDiv.scrollHeight //this returns available scroll height value for this div element

    const clntHeight=contDiv.clientHeight // this return div height in px units

    const scrlTopHeight=contDiv.scrollTop // this returns how much the element has been scrolled from top --gives value in decimals

    const avalaibleHeight=Math.abs(scrlHeight-clntHeight-scrlTopHeight) //this returns how much scrollable height available while scrolling from top-- also give values in decimals

    if(avalaibleHeight<1){
        renderStudents()
    }
})