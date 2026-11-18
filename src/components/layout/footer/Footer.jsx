import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  UserRound,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../common/container";

export default function Footer() {
  return (
    <footer className="relative w-full bg-footer p-5 mt-12 pt-12">
      <Container>
        <div className="flex flex-col gap-6 lg:hidden">
          <div>
            <h3 className="mb-3 text-[14px] font-semibold text-white">
              Sign up for News and updates
            </h3>

            <form className="flex h-11 items-center rounded-[8px] border border-gray-400 px-2">
              <UserRound size={20} color="#ffffff" />
              <input
                type="email"
                placeholder="E-mail Address"
                className="w-full bg-transparent px-2 text-[16px] text-white outline-none placeholder:text-gray-300"
              />
              <button type="submit">
                <ChevronRight size={22} color="#ffffff" />
              </button>
            </form>
          </div>

          <div className="flex flex-col">
            <details className=" py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                Company
                <ChevronDown size={17} />
              </summary>
              <ul className="space-y-3 pt-4 text-sm text-text-footer">
                <li>
                <Link to="/about">about us</Link>
                </li>
                <li>
                  <a href="#">blog</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
              </ul>
            </details>

            <details className=" py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[14px] font-semibold text-white">
                Info
                <ChevronDown size={17} />
              </summary>
              <ul className="space-y-3 pt-4 text-[14px] text-text-footer">
                <li>
                  <a href="#">How it works?</a>
                </li>
                <li>
                  <a href="#">our promises</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </details>

            <details className=" py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[14px] font-semibold text-white">
                Contact us
                <ChevronDown size={17} />
              </summary>
              <ul className="space-y-3 pt-4 text-[14px] text-text-footer">
                <li className="flex items-center gap-2">
                  <MapPin size={17} />
                  123 Main Street, Anytown, USA
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={17} />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={17} />
                  TechHeimSupport@gmail.com
                </li>
              </ul>
            </details>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-1">
              <span className="flex items-center justify-center rounded-sm bg-white px-1 py-2">
                <img
                  src="/image/landing/footer/paypol.svg"
                  alt="PayPal"
                  className="w-10"
                />
              </span>
              <span className="flex items-center justify-center rounded-sm bg-white px-1 py-2">
                <img
                  src="/image/landing/footer/american.svg"
                  alt="American Express"
                  className="w-10"
                />
              </span>
              <span className="flex items-center justify-center rounded-sm bg-white px-1 py-2">
                <img
                  src="/image/landing/footer/visa.svg"
                  alt="Visa"
                  className="w-10"
                />
              </span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/image/landing/footer/Facebook.svg"
                alt="Facebook"
                className="h-6 w-6"
              />
              <img
                src="/image/landing/footer/twitter.svg"
                alt="Twitter"
                className="h-6 w-6"
              />
              <img
                src="/image/landing/footer/Instagram.svg"
                alt="Instagram"
                className="h-6 w-6"
              />
              <img
                src="/image/landing/footer/Youtube.svg"
                alt="Youtube"
                className="h-6 w-6"
              />
            </div>
          </div>

          <p className="text-[14px] text-text-footer">© 2023 Tech Heim.</p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-gray-300">
            <a href="#">cookie settings</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Imprint</a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex flex-wrap justify-between gap-8">
            <div>
              <h3 className="mb-2 text-[16px] font-semibold text-white">
                Company
              </h3>
              <ul className="space-y-2 text-[16px] text-text-footer">
                <li>
                <Link to="/about">about us</Link>
                </li>
                <li>
                  <a href="#">blog</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-[16px] font-semibold text-white">
                Info
              </h3>
              <ul className="space-y-2 text-[16px] text-text-footer">
                <li>
                  <a href="#">How it works?</a>
                </li>
                <li>
                  <a href="#">our promises</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-[16px] font-semibold text-white">
                Contact us
              </h3>
              <ul className="space-y-3 text-[16px] text-text-footer">
                <li className="flex items-center gap-2">
                  <MapPin size={18} />
                  123 Main Street, Anytown,USA
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} />
                  TechHeimSupport@gmail.com
                </li>
              </ul>
            </div>

            <div className="w-full max-w-[280px]">
              <h3 className="mb-3 text-[16px] font-semibold text-white">
                Sign up for News and updates
              </h3>
              <form className="flex h-12 items-center rounded-[8px] border border-gray-400 px-2">
                <UserRound size={25} color="#ffffff" />
                <input
                  type="email"
                  placeholder="E-mail Address"
                  className="w-full bg-transparent px-2 text-[16px] text-white outline-none placeholder:text-gray-300"
                />
                <button type="submit">
                  <ChevronRight size={24} color="#ffffff" />
                </button>
              </form>

              <div className="mt-4 flex items-center gap-4 cursor-pointer">
                <img
                  src="/image/landing/footer/Facebook.svg"
                  alt="Facebook"
                  className="h-7 w-7"
                />
                <img
                  src="/image/landing/footer/twitter.svg"
                  alt="Twitter"
                  className="h-7 w-7"
                />
                <img
                  src="/image/landing/footer/Instagram.svg"
                  alt="Instagram"
                  className="h-7 w-7"
                />
                <img
                  src="/image/landing/footer/Youtube.svg"
                  alt="Youtube"
                  className="h-7 w-7"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-end justify-between gap-6 pt-4">
            <div>
              <div className="mb-4 flex gap-1 font-bold text-footer">
                <span className="flex items-center justify-center rounded-[4px] bg-white px-1 py-2">
                  <img
                    src="/image/landing/footer/paypol.svg"
                    alt="PayPal"
                    className="w-10"
                  />
                </span>
                <span className="flex items-center justify-center rounded-[4px] bg-white px-1 py-2">
                  <img
                    src="/image/landing/footer/american.svg"
                    alt="American Express"
                    className="w-10"
                  />
                </span>
                <span className="flex items-center justify-center rounded-[4px] bg-white px-1 py-2">
                  <img
                    src="/image/landing/footer/visa.svg"
                    alt="Visa"
                    className="w-10"
                  />
                </span>
              </div>
              <p className="text-[16px] text-text-footer">© 2023 Tech Heim.</p>
            </div>

            <div className="flex flex-wrap gap-6 text-[13px] text-gray-300">
              <a href="#">cookie settings</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Imprint</a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-18 right-8 z-30 hidden flex-col gap-30 lg:flex">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-200 text-footer">
            <MessageCircle size={22} />
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-200 text-footer"
          >
            <ChevronUp size={22} />
          </button>
        </div>
      </Container>
    </footer>
  );
}
