function drag(e) {
    e.dataTransfer.setData('text',e.target.id)
}

function allowDrop(e) {
    e.preventDefault()
}


function drop(e) {
    e.preventDefault()
    let data = e.dataTransfer.getData('text')
    e.target.appendChild(document.getElementById(data)) 
}


document.getElementById('drag1').addEventListener('dragstart', drag)

let dropArea = ['d1','d2','d3','d4']

dropArea.forEach((id) => {
let element = document.getElementById(id)
element.addEventListener('drop',drop)
element.addEventListener('dragover', allowDrop)
})