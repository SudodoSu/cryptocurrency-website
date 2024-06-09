import Image from "next/image";

function Footer() {
  return (
    <footer className="mt-20">
      <div className="w-full bg-gray2 py-12">
        <div className="container flex justify-between flex-col sm:flex-row  gap-8 sm:gap-0">
          <div>
            <div className="w-14 mb-5">
              <Image
                src="/assets/images/logo.png"
                alt="Logo BoostWeb"
                width={500}
                height={500}
              />
            </div>
            <p className="text-sm max-w-[300px]">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12">
            <div>
              <h3 className="mb-6 font-semibold text-2xl">Quick Links</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="/"
                    className="hover:underline opacity-60 hover:opacity-100"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#references" className="hover:underline">
                    Invest
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:underline">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    Build
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 font-semibold text-2xl">Developers</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="/" className="hover:underline">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="/#references" className="hover:underline">
                    Build
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 font-semibold text-2xl">Legal</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="/media" className="hover:underline">
                    Press and Media
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service " className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen py-6">
        <div className="container flex justify-between text-sm">
          <p>All Rights Reservd Crypto.ai 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;