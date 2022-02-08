function yellow(){
    document.body.style.backgroundColor='yellow'
}
const red = document.getElementById('make-red')
red.onclick = makered;



function makered() {
    document.body.style.backgroundColor = 'red'
}


const greenButton=document.getElementById('make-black-button')
//anonymous function  j functioner kono name thakey na 
greenButton.onclick= function (){
    document.body.style.backgroundColor='black'
}


// handle by using addEvent listener


const golderButton=document.getElementById('make-golden-rod')
golderButton.addEventListener('click',makeGolderRod)
function makeGolderRod(){
    document.body.style.backgroundColor='goldenRod'
}


//addEventListener
const hotPinkButton=document.getElementById('make-hotPink')
hotPinkButton.addEventListener('click',function(){
    document.body.style.backgroundColor='hotPink'
})


// direct event listener
document.getElementById('make-lightBlue').addEventListener('click',function(){
    document.body.style.backgroundColor='lightBlue'
})
