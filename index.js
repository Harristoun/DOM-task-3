const firstFunc = () => {
    const h1 = document.createElement('h1')
    h1.textContent = 'Работа c DOM'
    document.body.prepend(h1)
}

const secondFunc = () => {
    const link = document.createElement('a')
    link.href = 'https://paper.dropbox.com/doc/DOM-KrSbmrOQHo09BZwgsOmhp'
    link.textContent = 'Ссылка'
    document.body.prepend(link)
}

const thirdFunc = (color) => {
    document.body.style.backgroundColor = color
}

const fourthFunc = (text) => {
    const list = document.getElementById('list')
    const li = document.createElement('li')
    list.append(li)
    li.append(text)
document.body.prepend(list)
}

const fiveFunc = () => {
    const copyright = document.getElementById('copyright')
    copyright.remove()
}










console.log(fiveFunc());
console.log(fourthFunc('Какой-то текст....'))
console.log(thirdFunc('green'))
console.log(firstFunc())
console.log(secondFunc())
