const Location = () => {
  return (
    <>
      <div className="h-[90vh] w-full flex items-center justify-center px-[10rem]">
        <div className="w-[70%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13731.528865253278!2d76.80344738648705!3d30.637276859763027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb2ed8242e79%3A0xe7c1f436bad3711d!2sNike%20Factory%20Store!5e0!3m2!1sen!2sin!4v1698431886889!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-[30%]">
          <h1 className=" text-6xl text-left text-[#D01C28] font-[800]">
            Aao kabhi dukan pr..karre tumhari khatirdaari...
          </h1>
        </div>
      </div>
    </>
  );
};

export default Location;
