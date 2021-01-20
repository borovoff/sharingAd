const footer = document.createElement('footer')
footer.classList.add('footer', 'row', 'row_evenly', 'row_wrap')
document.body.appendChild(footer)

fetch('footer').then(async result => footer.innerHTML = await result.text())

const form = document.getElementById('form')
const serverError = document.getElementById('serverError')

form.addEventListener('submit', event => {
    event.preventDefault()

    const object = getObject()
    fetch('https://sharing.tzar.su/api/save-email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
        .then(result => {
            if (result.ok) {
                location.href = 'success-save-email'
            } else {
                return result.json()
            }
        })
        .then(result => {
            const error = result.error
            if (error) {
                serverError.textContent = error
            } else {
                serverError.textContent = 'Что-то пошло не так, наши контакты указаны ниже.'
            }
        })
        .catch(error => console.log(error))
})

function getObject() {
    const formData = new FormData(form)
    const object = {}
    formData.forEach((value, key) => object[key] = value)

    return object
}

function linkClick(lockType) {
    const select = document.getElementById('lockType')
    select.value = lockType
}

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
