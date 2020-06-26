import { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `     
    .gradient {
      background: #77a1d3;
      background: radial-gradient(circle at bottom left, #77A1D2, #79CBCA, #E684AE);    
      animation: gradientAnimation 30s ease infinite;
      background-size: 150% 150%;
    }

    @keyframes gradientAnimation {
      0%{ background-position: 0% 50% }
      50%{ background-position: 100% 50% }
      100%{ background-position: 0% 50% }
    }
    
    .browser-mockup {
      border-top: 2em solid rgba(230, 230, 230, 0.7);
      position: relative;
      height: 60vh;
    }

    .browser-mockup:before {
      display: block;
      position: absolute;
      content: "";
      top: -1.25em;
      left: 1em;
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      background-color: #f44;
      box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
    }

    .browser-mockup > * {
      display: block;
    }
`,
        }}
      />
      <div className="gradient font-sans leading-relaxed tracking-wide flex flex-col">
        <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
            <div className="pl-4 flex items-center">
              <img
                src="/images/auto-meeting-white.svg"
                className="w-6 h-6 mr-2"
              />
              <span className="text-white no-underline hover:no-underline font-bold text-2xl">
                Auto Meeting
              </span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto h-screen">
          <div className="text-center px-3 lg:px-0 pt-4">
            <h1 className="my-8 text-2xl md:text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
              Tired of Joining Remote Meetings Late?
            </h1>
            <p className="leading-normal text-teal-100 text-base text-medium md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Auto Meeting opens Teams, Meet, and Zoom links in your Google
              calendar events just in time, so you'll{" "}
              <span className="underline">never again</span> forget to join.
            </p>
            <button className="mx-auto transition duration-300 ease-in-out lg:mx-0  bg-white text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg hover:shadow-md hover:text-teal-700 w-56">
              Download for Free
            </button>
          </div>

          <div className="flex items-center w-full mx-auto content-end">
            <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl" />
          </div>
        </div>

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
      </div>
    </>
  );
};

export default Home;
