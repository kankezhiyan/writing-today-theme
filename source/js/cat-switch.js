catswitch = () => {
    let cat_btn = document.getElementById('the-cat-btn'),
        author_btn = document.getElementById('the-author-btn'),
        type_btn = document.getElementById('the-type-btn'),
        cat = document.getElementById('the-cat'),
        author = document.getElementById('the-author'),
        type = document.getElementById('the-type')

    cat_btn.addEventListener('click', () => {
        cat.style.setProperty('display', 'block')
        author.style.setProperty('display', 'none')
        type.style.setProperty('display', 'none')
    })

    author_btn.addEventListener('click', () => {
        cat.style.setProperty('display', 'none')
        author.style.setProperty('display', 'block')
        type.style.setProperty('display', 'none')
    })

    type_btn.addEventListener('click', () => {
        cat.style.setProperty('display', 'none')
        author.style.setProperty('display', 'none')
        type.style.setProperty('display', 'block')
    })
}

catswitch()