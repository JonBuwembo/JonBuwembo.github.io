
emailjs.init("MWwDD4rPGf4oIV9Nu");

const form = document.getElementById('contact-form');
const button = document.getElementById('submit-contact-form');
const messageStatus = document.getElementById('sent-status');

document.addEventListener("submit", async (e) => {
    e.preventDefault()

    button.textContent = "Sending .... "
    button.disabled = true;

    try {
        // network request simulated
        await emailjs.sendForm('service_gxxnn0e', 'template_u4qay8c', form);

        alert("Message Sent!");
        button.textContent = "Sent ✓ ";
        messageStatus.textContent = "Message sent successfully!";

    } catch (err) {
        console.error("Failed to send response ...", err)
        button.disabled = false;
    }

    // set back to default showing.
    setTimeout(() => {
        form.reset();
        button.textContent = "Send message";
        button.disabled = false;
        messageStatus.textContent = "";
    }, 2500);
})