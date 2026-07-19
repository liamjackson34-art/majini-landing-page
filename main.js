// Contact Form Handler
const contactForm = document.querySelector('form[name="contact"]')

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault()

    // Create FormData from form
    const formData = new FormData(this)

    // Send to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        // Show success message
        const successMessage = document.getElementById('form-success')
        contactForm.style.display = 'none'
        successMessage.style.display = 'block'

        // Reset after 5 seconds
        setTimeout(() => {
          contactForm.reset()
          contactForm.style.display = 'block'
          successMessage.style.display = 'none'
        }, 5000)
      })
      .catch((error) => console.log('Form error:', error))
  })
}
