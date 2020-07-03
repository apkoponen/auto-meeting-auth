import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white pt-12">
      <div className="container mx-auto mt-8 px-8">
        <div className="w-full flex md:flex-row py-6 justify-between items-center">
          <div className="mb-6">
            <a
              className="text-gray-900 no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex items-center"
              href="#"
            >
              <img
                src="/images/auto-meeting.svg"
                className="w-8 h-8 mr-2 float-left"
              />
              Auto Meeting
            </a>
          </div>
          <div className="mb-6">
            <a
              href="https://twitter.com/apkoponen"
              className="font-light no-underline hover:underline text-gray-800 hover:text-teal-500"
            >
              Twitter
            </a>
            <a
              href="https://github.com/apkoponen/auto-meeting"
              className="font-light no-underline hover:underline text-gray-800 hover:text-teal-500 ml-8"
            >
              Github
            </a>
            <Link href="/privacy">
              <a className="font-light no-underline hover:underline text-gray-800 hover:text-teal-500 ml-8">
                Privacy Policy
              </a>
            </Link>
            <a
              href="https://github.com/apkoponen/auto-meeting/blob/master/LICENSE.md"
              className="font-light no-underline hover:underline text-gray-800 hover:text-teal-500 ml-8"
            >
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
