// byId , byClass , bytag , by querySelector , by querySelectorAll

// let header = document.getElementById('cardheader')
// header.style.borderBottom = '5px solid green'
// document.getElementById('title').textContent = 'All courses'

// document.getElementById('title').innerText = 'All courses'


// document.getElementById('title').innerHTML = 'All courses'





// for(a=0;a<=3;a++){
//     let list = document.getElementsByClassName('list-item')[a]
// list.style.backgroundColor = 'red'

// list.style.color = 'yellow'
//     document.writeln(a)
// }




// for(i=0;i<=3;i++){
// let tagg = document.getElementsByTagName('li')[i]
// tagg.style.textShadow = '0  0 10px purple'
// tagg.style.color = 'pink'
// }

// document.querySelector('#title').style.color = 'gold'

// document.querySelector('li').style.color  = 'pink'

let a = document.querySelectorAll('#title')[0]
a.style.textShadow = '0 0  10px purple'


for(i=0;i<=3;i++){

let list = document.querySelectorAll('li')[i]
list.style.textShadow = '0 0 10px green'

}

// function sbt(){
//     let text = document.getElementById('text').value   
//     document.getElementById('result').innerHTML = text 
// }


let btn = document.getElementById('btn')

btn.addEventListener('click' , function(){
    let text = document.getElementById('text').value   
      
    document.getElementById('result').innerHTML = text 
})