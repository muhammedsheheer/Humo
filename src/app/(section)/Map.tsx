import React from "react";

const Map: React.FC = () => {
  return (
    <section className="h-full w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.8611022181535!2d-0.39688592352082785!3d51.653632971846974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766b6147fa791f%3A0xf6279f0a91ed23b8!2sHumo%20Watford!5e1!3m2!1sen!2sin!4v1745414858860!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0px" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[50vh] w-full grayscale invert"
      ></iframe>
    </section>
  );
};

export default Map;
