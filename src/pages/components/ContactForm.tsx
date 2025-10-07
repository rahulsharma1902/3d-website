import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    // Check for empty fields and show an alert if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      alert('All fields are required!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Your message has been sent!');
        // Reset form fields after success
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setErrorMessage(data.message || 'An error occurred.');
      }
    } catch (error) {
      setErrorMessage('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="contact-form"
      style={{
        width: '30rem',
        position: 'fixed',
        top: '0%',
        left: '10%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <form style={{ marginTop: '1rem' }} onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block' }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block' }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message" style={{ display: 'block' }}>
            Question
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message || ''}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', height: '150px' }}
          />
        </div>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit" className="read-more-btn" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
