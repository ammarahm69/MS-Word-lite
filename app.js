let bold = document.getElementById('bold')
let italic = document.getElementById('italic')
let underline = document.getElementById('underline')
let color= document.getElementById('color')
let fontSize = document.getElementById('fontSize')


bold.addEventListener('click', toggleBold)

function toggleBold() {
    let editor = document.getElementById('editor');
    if (editor.style.fontWeight === 'bold') {
        editor.style.fontWeight = 'normal';
    } else {
        editor.style.fontWeight = 'bold';
    }
}

italic.addEventListener('click' , toggleItalic)
function toggleItalic(){
    let editor = document.getElementById('editor');
    if(editor.style.fontStyle === 'italic'){
        editor.style.fontStyle = 'normal'
    }else{
        editor.style.fontStyle = 'italic'
    }
}
underline.addEventListener('click', toggleUnderline)

function toggleUnderline() {
    let editor = document.getElementById('editor');
    if (editor.style.textDecoration === 'underline') {
        editor.style.textDecoration = 'none';
    } else {
        editor.style.textDecoration = 'underline';
    }
}

color.addEventListener('input' , setColor)
function setColor(event){
    let editor = document.getElementById('editor');
    editor.style.color = event.target.value
}
fontSize.addEventListener('input' , setfont)
function setfont(event){
    let editor = document.getElementById('editor');
    editor.style.fontSize = event.target.value+'px'
}