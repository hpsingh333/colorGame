var mode=6;
var colors=generateRandomColor(mode)

var pickedColor=colors[Math.floor(Math.random()*6)];
var res=document.querySelector("#result")
var headingValue=document.querySelector("h1 span")
var heading=document.querySelector("#heading")
var squares=document.querySelectorAll(".square");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#choice1");
var hardBtn=document.querySelector("#choice2");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    mode=3
    colors=generateRandomColor(mode);
    pickedColor=colors[Math.floor(Math.random()*mode)];
    headingValue.innerHTML="RGB"+pickedColor.slice(3);
    heading.style.backgroundColor="steelblue"
    for(var i=0; i<squares.length/2;i++){
        squares[i].style.backgroundColor=colors[i]
        squares[i+3].style.display="none";
    }
    res.innerHTML="";
    resetButton.innerHTML="New Colors";
})
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    mode=6;
    colors=generateRandomColor(mode);
    pickedColor=colors[Math.floor(Math.random()*mode)];
    headingValue.innerHTML="RGB"+pickedColor.slice(3);
    heading.style.backgroundColor="steelblue"
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i]
        squares[i].style.display="block";
    }
    res.innerHTML="";
    resetButton.innerHTML="New Colors";
})
headingValue.innerHTML="RGB"+pickedColor.slice(3)

resetButton.addEventListener("click", function(){
        console.log(mode)
        colors=generateRandomColor(mode);
        pickedColor=colors[Math.floor(Math.random()*mode)];
        headingValue.innerHTML="RGB"+pickedColor.slice(3);
        heading.style.backgroundColor="steelblue"
        for(var i=0; i<squares.length;i++){
            squares[i].style.backgroundColor=colors[i]
        }
   
    
    res.innerHTML="";
    resetButton.innerHTML="New Colors";
})

for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor!==pickedColor){
            this.style.backgroundColor="#232323"
            res.innerHTML="Try Again";
            
        }
        else{
            res.innerHTML="Correct!";
            changeColors(pickedColor)
            heading.style.backgroundColor=pickedColor;
            resetButton.innerHTML="Play Again?"
        }
})}

function changeColors(color){
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function generateRandomColor(num){
    var arr=[];
    for(var i=0; i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}