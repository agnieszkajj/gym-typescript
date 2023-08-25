import logo from "../../assets/Logo.png";

function Footer() {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis recusandae minima incidunt quos, dolore aspernatur quo
            natus quisquam illo mollitia iste dolores
          </p>
          <p>© Evogym All right reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et girvida id et etiam</p>
          <p className="my-5">Ullam corper vivamus</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Tempus metus mattis ritus volutpat egestas.</p>
          <p>(333) 546 839</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
