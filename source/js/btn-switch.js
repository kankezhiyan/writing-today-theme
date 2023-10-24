btn_switch = () => {
    let first_btn = document.getElementById('the-first-btn'),
        second_btn = document.getElementById('the-second-btn'),
        third_btn = document.getElementById('the-third-btn'),
        first_ul = document.getElementById('first-ul'),
        second_ul = document.getElementById('second-ul'),
        third_ul = document.getElementById('third-ul')

    first_btn.addEventListener('click', () => {
        first_ul.classList.remove('hiding')
        first_btn.classList.add('show_btn')
        second_ul.classList.add('hiding')
        second_btn.classList.remove('show_btn')
        third_ul.classList.add('hiding')
        third_btn.classList.remove('show_btn')
    })

    second_btn.addEventListener('click', () => {
        first_ul.classList.add('hiding')
        first_btn.classList.remove('show_btn')
        second_ul.classList.remove('hiding')
        second_btn.classList.add('show_btn')
        third_ul.classList.add('hiding')
        third_btn.classList.remove('show_btn')
    })

    third_btn.addEventListener('click', () => {
        first_ul.classList.add('hiding')
        first_btn.classList.remove('show_btn')
        second_ul.classList.add('hiding')
        second_btn.classList.remove('show_btn')
        third_ul.classList.remove('hiding')
        third_btn.classList.add('show_btn')
    })
}

btn_switch()