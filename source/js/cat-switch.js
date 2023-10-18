catswitch = () => {
    let cat_btn = document.getElementById('the-cat-btn'),
        author_btn = document.getElementById('the-author-btn'),
        type_btn = document.getElementById('the-type-btn'),
        cat = document.getElementById('the-cat'),
        author = document.getElementById('the-author'),
        type = document.getElementById('the-type')

    cat_btn.addEventListener('click', () => {
        cat.classList.remove('hiding')
        cat_btn.classList.add('showing')
        author.classList.add('hiding')
        author_btn.classList.remove('showing')
        type.classList.add('hiding')
        type_btn.classList.remove('showing')
    })

    author_btn.addEventListener('click', () => {
        cat.classList.add('hiding')
        cat_btn.classList.remove('showing')
        author.classList.remove('hiding')
        author_btn.classList.add('showing')
        type.classList.add('hiding')
        type_btn.classList.remove('showing')
    })

    type_btn.addEventListener('click', () => {
        cat.classList.add('hiding')
        cat_btn.classList.remove('showing')
        author.classList.add('hiding')
        author_btn.classList.remove('showing')
        type.classList.remove('hiding')
        type_btn.classList.add('showing')
    })
}

catswitch()