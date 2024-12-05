document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('name').value;
    const contactEmail = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // التحقق من صحة البريد الإلكتروني
    if (!validateEmail(contactEmail)) {
        alert('يرجى إدخال بريد إلكتروني صالح.');
        return;
    }

    // إعداد بريد الإلكتروني لإرساله عبر EmailJS
    emailjs.send('service_ixc91fm', 'template_rrlfesd', {
        to_email: 'Faridhm214@gmail.com',
        from_name: userName,
        from_email: contactEmail,
        message: message
    })
    .then(function(response) {
       console.log('Success!', response.status, response.text);
       alert('تم إرسال الرسالة بنجاح!');
    }, function(error) {
       console.error('Failed...', error);
       alert('حدث خطأ أثناء إرسال الرسالة.');
    });
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}