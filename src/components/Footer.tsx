import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2B3247] p-10 text-white bottom-0">
      <div className="footer container mx-auto px-3 md:px-12 ">
        <nav>
          <h6 className="footer-title">Navigate</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Post a Job</a>
          <a className="link link-hover">Find a Freelancer</a>
          <a className="link link-hover">Find a Job</a>
          <a className="link link-hover">Enterprise Solution</a>
          <a className="link link-hover">Agency Solutions</a>
          <a className="link link-hover">PO Solutions</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company Info</h6>
          <a className="link link-hover">About Guru</a>
          <a className="link link-hover">How Guru Works</a>
          <a className="link link-hover">Why Guru</a>
          <a className="link link-hover">Work Agreements</a>
          <a className="link link-hover">SafePay</a>
          <a className="link link-hover">Pricing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Help & FAQ</h6>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Mobile App</a>
          <a className="link link-hover">APIs</a>
          <a className="link link-hover">Sitemap</a>
          <a className="link link-hover">Cookie Settings</a>
        </nav>
        <nav>
          <h6 className="footer-title">Policies</h6>
          <a className="link link-hover">IP policy</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
        </nav>
        <nav>
          <h6 className="footer-title">Connect With Us</h6>
          <div className="flex items-center gap-2">
            <Image
              src={"/svg/facebook.svg"}
              width={50}
              height={50}
              alt="facebook"
            />
            <Image
              src={"/svg/linkedin.svg"}
              width={50}
              height={50}
              alt="facebook"
            />
          </div>
        </nav>
      </div>
    </footer>
  );
}
