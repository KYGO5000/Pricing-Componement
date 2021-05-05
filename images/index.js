const slider = document.getElementById("myRange");
const select = document.getElementById("selector");
const progression = document.getElementById("progress")
const sub =document.getElementById("followers")
const amount= document.getElementById("money")
slider.oninput = function (){
    const move =select.style.left= this.value + "%"
    const number =move.toString()
    console.log(number)
    progression.style.width= this.value + "%"
    console.log(move)
    switch(number){
        case "10%":
        case "15%":
        case "20%":
            sub.innerHTML="10K" + " PAGEVIEWS"
            amount.innerHTML="$8.00" 
            break;
        case "30%":
        case "35%":
        case "40%":
            sub.innerHTML="50K" + " PAGEVIEWS"
            amount.innerHTML="$12.00" 
            break;
        case "45%":
        case "50%":
        case "55%":
        case "60%":
            sub.innerHTML="100K" + " PPAGEVIEWS"
            amount.innerHTML="$16.00" 
            break;
        case "65%":
        case "70%":
        case "75%":
        case "80%":
            sub.innerHTML="500K" + " PAGEVIEWS"
            amount.innerHTML="$24.00" 
            break;
        case "85%":
        case "90%":
        case "95%":
        case "100%":
            sub.innerHTML="1M" + " Pageviews"
            amount.innerHTML="$36.00" 
            break;
    }
}
function val(event){
    let g0 = true
    const take = document.getElementById("checked")
    const showElement = document.getElementsByClassName("appear")
    if (take.checked == false){
        console.log("off")
        if(showElement){
            for( i = 0; i < showElement.length; i++){
                showElement[i].style.display ="none"
            }
        }
    } else {
        console.log("on")
        for( i = 0; i < showElement.length; i++){
            showElement[i].style.display = "inline-block"
            showElement[i].style.top = "5px"
        }
    }
}
const butt= document.getElementsByClassName(".toggle--input").checked
console.log(butt)
