addEventListener('DOMContentLoaded', () => {
    const btnmenu = document.querySelector('.btn-image')
    if(btnmenu) {
        btnmenu.addEventListener('click', () => {
            const navg = document.querySelector('img')
            navg.element('show')
        })
    }
})