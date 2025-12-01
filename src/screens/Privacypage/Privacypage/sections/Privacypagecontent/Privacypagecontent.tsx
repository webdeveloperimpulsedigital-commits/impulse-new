import React from "react";

export const Privacypagecontent = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="privacy-policy">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        
        {/* ================== HEADER ================== */}
        {/* <div className="text-left mb-12">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl leading-tight">
            Privacy Policy
          </h2>
          
        </div> */}

        {/* ================== CONTENT ================== */}
        <div className="space-y-10 text-left">
          
          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[15px] leading-relaxed">
            This Privacy Policy governs the manner in which Impulse Digital and its subsidiaries, partners, agents and affiliates 
            collect, use, maintain and disclose information collected from visitors of Impulse Digital 
            (<strong>www.theimpulsedigital.com</strong>). By accessing our website, you consent to the collection, storage and use of the 
            personal information you provide for any of the services we offer.
          </p>

          {/* PERSONAL IDENTIFICATION */}
          <div>
            <h3 className="text-xl font-semibold text-[#543d98] mb-2">Personal Identification Information</h3>
            <p className="text-[15px] text-[#030019] leading-relaxed">
              We may collect personal identification information from Users in various ways, including when Users visit our website,
              subscribe to the newsletter, fill out a form, or engage in other services or features offered on our site.
              Users may be asked for their name, email address, mailing address, and phone number.
              Users may, however, visit our website anonymously. Refusing to supply this information may prevent Users from
              engaging in certain website-related activities.
            </p>
          </div>

          {/* NON-PERSONAL IDENTIFICATION */}
          <div>
            <h3 className="text-xl font-semibold text-[#543d98] mb-2">Non-Personal Identification Information</h3>
            <p className="text-[15px] text-[#030019] leading-relaxed">
              We may automatically collect non-personal identification information whenever Users interact with our website.
              This may include technical details such as browser type, IP address, operating system, device type, 
              ISP used, page interaction data, and duration of visits.
            </p>
          </div>

          {/* COOKIES */}
          <div>
            <h3 className="text-xl font-semibold text-[#543d98] mb-2">Web Browser Cookies</h3>
            <p className="text-[15px] text-[#030019] leading-relaxed">
              Our site may use cookies to enhance the User experience. Cookies help us keep records and track certain information.
              Users may choose to disable cookies in their browser settings, but doing so may result in some website 
              functionalities not working properly.
            </p>
          </div>

          {/* HOW WE USE INFORMATION */}
          <div>
            <h3 className="text-xl font-semibold text-[#543d98] mb-2">How We Use Collected Information</h3>
            <ul className="list-disc pl-6 text-[15px] leading-relaxed text-[#030019] space-y-2">
              <li><strong>To improve customer service:</strong> Information helps us respond more efficiently to support needs.</li>
              <li><strong>To personalize experience:</strong> We analyze how Users engage with our website.</li>
              <li><strong>To improve our website:</strong> Feedback is used to enhance our products and services.</li>
              <li><strong>To run promotions or surveys:</strong> For campaigns relevant to Users.</li>
              <li><strong>To send information:</strong> Users receive updates or newsletters they opt in for.</li>
              <li><strong>To send emails:</strong> Used for responses, updates, and communication. Users may unsubscribe anytime.</li>
            </ul>
          </div>

          {/* HOW WE PROTECT DATA */}
          <div>
            <h3 className="text-xl font-semibold text-[#543d98] mb-2">How We Protect Your Information</h3>
            <p className="text-[15px] text-[#030019] leading-relaxed">
              We adopt industry-standard data collection, storage, and processing practices to protect your information 
              against unauthorized access, alteration, disclosure, loss or destruction.  
              Sensitive data exchanges happen over SSL-secured, encrypted communication channels.
            </p>
          </div>

          {/* SHARING INFORMATION */}
          <div>
            <h3 className="text-xl font-semibold text-[#543d98] mb-2">Sharing Your Personal Information</h3>
            <p className="text-[15px] text-[#030019] leading-relaxed">
              We do not sell, trade, or rent Users’ personal information.  
              We may share aggregated demographic information not linked to personal identification with trusted partners 
              for the purposes outlined above.
            </p>
          </div>

          {/* CHANGES TO POLICY */}
          <div>
            <h3 className="text-xl font-semibold text-[#543d98] mb-2">Changes to This Privacy Policy</h3>
            <p className="text-[15px] text-[#030019] leading-relaxed">
              Impulse Digital may update this Privacy Policy at any time. Changes will be posted on this page.
              Continued use of our website after changes are applied constitutes acceptance of the updated policy.
              Users are encouraged to review this page regularly.
            </p>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-xl font-semibold text-[#543d98] mb-2">Contacting Us</h3>
            <p className="text-[15px] text-[#030019] leading-relaxed">
              For questions about this Privacy Policy or your interaction with our website, contact us at:<br />
              <strong>collabs@theimpulsedigital.com</strong>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
