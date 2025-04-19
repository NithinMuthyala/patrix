


const Footer = () => {
    return <footer className="footer">
  
    {/* START THE SOCIAL MEDIA CONTENT  */}
    <div className="footer-sm" style={{ backgroundColor: "#212121" }}>
      <div className="container">
        <div className="row py-4 text-center text-white">
          <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
            connect with us on social media
          </div>
          <div className="col-lg-7 col-md-6">
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-github" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* START THE CONTENT FOR THE CAMPANY INFO */}
    <div className="container mt-5">
      <div className="row text-white justify-content-center  pb-3">
        <div className="col-12 col-sm-6 col-lg-6 mx-auto">
          <h5 className="text-capitalize fw-bold">Nexel Data</h5>
          <hr
            className="bg-white d-inline-block mb-4"
            style={{ width: 60, height: 2 }}
          />
          <p className="lh-lg">
            We are the pioneers of leading in software industrry lading from last from lat 8 year w ehandle every ened to end solutuon
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
          <h5 className="text-capitalize fw-bold">Web Links</h5>
          <hr
            className="bg-white d-inline-block mb-4"
            style={{ width: 60, height: 2 }}
          />
          <ul className="list-inline campany-list">
            <li>
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Clients</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
          <h5 className="text-capitalize fw-bold">useful links</h5>
          <hr
            className="bg-white d-inline-block mb-4"
            style={{ width: 60, height: 2 }}
          />
          <ul className="list-inline campany-list">
          <li>
              <a href="#"> About us</a>
            </li>
            <li>
              <a href="#"> Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
           
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
          <h5 className="text-capitalize fw-bold">contact</h5>
          <hr
            className="bg-white d-inline-block mb-4"
            style={{ width: 60, height: 2 }}
          />
          <ul className="list-inline campany-list">
            <li>
              <a href="#">Contact Us</a>
            </li>
      
          </ul>
        </div>
      </div>
    </div>
    {/* START THE COPYRIGHT INFO  */}
    <div className="footer-bottom pt-5 pb-5">
      <div className="container">
        <div className="row text-center text-white">
          <div className="col-12">
            <div className="footer-bottom__copyright">
              © Copyright 2021 <a href="#">Company</a> | Created by{" "}
              <a href="http://codewithpatrick.com" target="_blank">
                Muriungi
              </a>
              <br />
              <br />
              Distributed by{" "}
              <a href="http://themewagon.com" target="_blank">
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
};

export default Footer