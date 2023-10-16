catswitch = () => {
    let cat_btn = document.getElementById('the-cat-btn'),
        author_btn = document.getElementById('the-author-btn'),
        type_btn = document.getElementById('the-type-btn'),
        cat = document.getElementById('the-cat'),
        author = document.getElementById('the-author'),
        type = document.getElementById('the-type')

    cat_btn.addEventListener('click', () => {
        cat.style.setProperty('display', 'block')
        cat_btn.classList.add('showing')
        author.style.setProperty('display', 'none')
        author_btn.classList.remove('showing')
        type.style.setProperty('display', 'none')
        type_btn.classList.remove('showing')
    })

    author_btn.addEventListener('click', () => {
        cat.style.setProperty('display', 'none')
        cat_btn.classList.remove('showing')
        author.style.setProperty('display', 'block')
        author_btn.classList.add('showing')
        type.style.setProperty('display', 'none')
        type_btn.classList.remove('showing')
    })

    type_btn.addEventListener('click', () => {
        cat.style.setProperty('display', 'none')
        cat_btn.classList.remove('showing')
        author.style.setProperty('display', 'none')
        author_btn.classList.remove('showing')
        type.style.setProperty('display', 'block')
        type_btn.classList.add('showing')
    })
}

catswitch()