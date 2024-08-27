document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var mailtoLink = 'mailto:geniusaryan007@gmail.com' +
        '?subject=' + encodeURIComponent('New Contact Form Submission') +
        '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
    
    window.location.href = mailtoLink;
    
    document.getElementById('msg').textContent = 'Opening your email client...';
    
    // Reset form
    this.reset();
    
    // Clear the message after 5 seconds
    setTimeout(function() {
        document.getElementById('msg').textContent = '';
    }, 5000);
});