let input = document.getElementById("input")
let button = document.querySelectorAll("button")

button.forEach(element => {
    element.addEventListener("click",(s) =>{
        console.log(s.target.textContent)

        if(s.target.textContent === "C"){
            input.innerHTML=" ";
        }
        else if(s.target.textContent === "<"){
            input.innerText = input.innerText.slice(0,-1);
        }
        else if(s.target.textContent === "="){
            input.innerText = eval(input.innerText);
        }
        else{
            input.innerText += s.target.textContent
        }
        input.scrollLeft = input.scrollWidth;
    });
});
