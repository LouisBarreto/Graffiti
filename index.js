
// Select some elements...

// Header Styling
let header = document.querySelector('#page-header') // <div><h2>Doggos</h2></div>
header.style.textAlign = 'Middle'
header.style.backgroundColor = 'coral'

// Styling Img 
let doggoPics = document.querySelectorAll('.dog-image') // array of HTML 
    for (let i = 0; i < doggoPics.length; i ++ ){
        doggoPics[i].style.borderRadius = '50px' 
    }

// Font Names
let dogNames = document.querySelectorAll('.dog-name')
for (let i = 0; i < dogNames.length; i ++ ){
    dogNames[i].style.fontFamily = 'Brush Script MT'
}
//Border around Pictures
let doggoPicsPip = document.querySelector('#dog-image-pip')

let doggoPicsTess = document.querySelector('#dog-image-tess')

let doggoPicsRizzo = document.querySelector('#dog-image-rizzo')

doggoPicsTess.style.border = '5px solid blue'

doggoPicsPip.style.border = '10px ridge red'

doggoPicsRizzo.style.border = '10px ridge red'

// Background color 
let site = document.body 
site.style.backgroundColor = 'coral'