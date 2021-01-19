const footer = document.createElement('footer')
footer.classList.add('footer', 'row', 'row_evenly', 'row_wrap')
document.body.appendChild(footer)

fetch('footer').then(async result => footer.innerHTML = await result.text())

const form = document.getElementById('form')

form.addEventListener('submit', event => {
    event.preventDefault()
    // TODO: server send
})

const inputs = form.getElementsByTagName('input')
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i]

    if (input.type === 'button') {
        continue
    }

    input.addEventListener('input', event => {
        const target = event.target
        const previous = target.previousElementSibling

        if (target.value) {
            previous.classList.remove('hide')
        } else {
            previous.classList.add('hide')
        }
    })
}
