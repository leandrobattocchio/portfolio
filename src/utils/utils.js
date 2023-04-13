export const darkModeScrollbar = (theme) => {
    const body = document.body
    if (theme === 'light') body.classList.remove('dark')
    else body.classList.add('dark')
}
