
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    // Populate dropdowns
    const sizeSelect = document.getElementById('size');
    const recruitingSelect = document.getElementById('recruiting');
    const verifySelect = document.getElementById('verify');

    const companySizes = [
      '1–10', '11–50', '51–200', '201–500', '500+'
    ];
    const recruitingRoles = [
      'Designers', 'Developers', 'Marketers', 'Sales', 'Support', 'Other'
    ];
    const verificationAnswers = ['17', '18', '19', '20'];

    companySizes.forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size;
      sizeSelect.appendChild(option);
    });

    recruitingRoles.forEach(role => {
      const option = document.createElement('option');
      option.value = role;
      option.textContent = role;
      recruitingSelect.appendChild(option);
    });

    verificationAnswers.forEach(answer => {
      const option = document.createElement('option');
      option.value = answer;
      option.textContent = answer;
      verifySelect.appendChild(option);
    });

    // Handle form submission
    form.addEventListener('submit', e => {
      e.preventDefault(); // Prevent actual form submission

      const verifyValue = verifySelect.value;
      const consentChecked = document.getElementById('consent').checked;

      // Validate human verification
      if (verifyValue !== '19') {
        alert('Incorrect answer to human verification. Please try again.');
        return;
      }

      // Validate consent checkbox
      if (!consentChecked) {
        alert('Please give your consent to hire LUCA.');
        return;
      }

      // Collect and log form data
      const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        phone: document.getElementById('phone').value,
        size: sizeSelect.value,
        recruiting: recruitingSelect.value,
        verify: verifyValue,
        consent: consentChecked
      };

      console.log('Form Data:', formData);

      // You can submit via fetch() or show a success message
      alert('Form submitted successfully!');
      form.reset();
    });
  });

