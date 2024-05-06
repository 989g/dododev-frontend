const ContactPage = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
      <p className='text-lg mb-4'>
        This is the contact page. You can reach out to us through the following
        methods:
      </p>
      <ul className='list-disc pl-4'>
        <li className='mb-2'>
          Phone: <span className='font-semibold'>123-456-7890</span>
        </li>
        <li className='mb-2'>
          Email: <span className='font-semibold'>contact@example.com</span>
        </li>
        <li className='mb-2'>
          Address:{' '}
          <span className='font-semibold'>123 Main St, City, Country</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactPage;
