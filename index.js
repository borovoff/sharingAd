const footer = document.createElement('footer')
footer.classList.add('footer', 'row', 'row_evenly', 'row_wrap')
document.body.appendChild(footer)

fetch('footer.html').then(async result => footer.innerHTML = await result.text())
