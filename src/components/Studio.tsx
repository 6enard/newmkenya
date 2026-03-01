const Studio = () => {
  return (
    <section id="studio" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-12 sm:mb-16 text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-light text-black mb-3 sm:mb-4">
            Visit Our <span className="italic">Studio</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Located in the heart of Nairobi, our studio is open for visits and consultations
          </p>
        </div>

        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0406837957685!2d36.978520174044625!3d-1.1312444354743905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1137995dd891%3A0x41d708cee52d4b56!2smkenya%20studio!5e0!3m2!1sen!2ske!4v1769816659013!5m2!1sen!2ske"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Studio Mkenya Location"
            className="w-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Studio;
