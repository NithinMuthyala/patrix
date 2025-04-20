



const ContactUs = () => {
  return <section id="contact" className="get-started">
    <div className="container">
      <div className="row text-center">
        <h1 className="display-3 fw-bold text-capitalize">Get started</h1>
        <p className="lh-lg">
          We’d love to hear from you! Reach out to us for any queries or support.
        </p>
      </div>
      {/* START THE CTA CONTENT  */}
      <div className="row text-white">
        <div className="col-12 col-lg-6 gradient shadow p-3">
          <div className="cta-info w-100">
            <h4 className="display-4 fw-bold">100% Satisfaction Guaranteed</h4>
            <p className="lh-lg">
              At Nexel Data, we are committed to delivering top-notch IT solutions tailored to your business needs.
              Our experienced team ensures reliable support, seamless communication, and high-quality results at every step.
            </p>
            <h3 className="display-3--brief">What will be the next step?</h3>
            <ul className="cta-info__list">
              <li>We'll review your requirements and prepare a detailed proposal.</li>
              <li>We’ll schedule a call to walk through the plan and gather your input.</li>
              <li>Together, we’ll kick off the project and start building success!</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-lg-6 bg-white shadow p-3">
          <div className="form w-100 pb-2">
            {/* <h2 className=" mb-5" style={{color:"#0F5A94 !important"}}>start your project</h2> */}
            <form action="#" className="row">
              <div className="col-lg-6 col-md mb-3">
                <input
                  type="text"
                  placeholder="First Name"
                  id="inputFirstName"
                  className="shadow form-control form-control-lg"
                />
              </div>
              <div className="col-lg-6 col-md mb-3">
                <input
                  type="text"
                  placeholder="Last Name"
                  id="inputLastName"
                  className="shadow form-control form-control-lg"
                />
              </div>
              <div className="col-lg-12 mb-3">
                <input
                  type="email"
                  placeholder="email address"
                  id="inputEmail"
                  className="shadow form-control form-control-lg"
                />
              </div>
              <div className="col-lg-12 mb-3">
                <textarea
                  name="message"
                  placeholder="message"
                  id="message"
                  rows={8}
                  className="shadow form-control form-control-lg"
                  defaultValue={""}
                />
              </div>
              <div className="text-center d-grid mt-1">
                <button
                  type="button"
                  className="rounded-pill btn-rounded pt-3 pb-3"
                >
                  submit
                  <i className="fas fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

};

export default ContactUs