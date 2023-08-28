function validateForm(event) {
    event.preventDefault(); // Prevent form submission for now
    
    const inputField = document.getElementById('email');
    const errorText1 = document.getElementById('error1');
    const errorText2 = document.getElementById('error2');
    
    if (inputField.value.trim() === '') {
      // Show the error message
      errorText1.classList.remove('hidden');
      errorText2.classList.remove('hidden');
    } else {
      // Hide the error message and submit the form
      errorText.classList.add('hidden');
      // Uncomment the following line to submit the form
      // event.target.submit();
    }
  }
  