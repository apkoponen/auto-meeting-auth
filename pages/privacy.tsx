import { FunctionComponent } from "react";
import Footer from "../src/components/layout/footer";
import Head from "next/head";

const Paragraph: FunctionComponent = ({ children }) => (
  <p className="mb-4">{children}</p>
);

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Auto Meeting Privacy Policy</title>
      </Head>
      <div className="font-sans leading-relaxed tracking-wide flex flex-col">
        <div className="mx-auto max-w-3xl">
          <div className="px-3 lg:px-0 pt-4">
            <h1 className="my-8 text-2xl md:text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
              Privacy Policy
            </h1>
            <Paragraph>
              Auto Meeting does not collect or store any of your personal
              information on our servers.
            </Paragraph>
            <Paragraph>
              The only sensitive piece of information we store is a temporary
              authorization code that is used to complete your authorization
              process with Google. The authorization code is valid only for a
              short period of time and is single-use.
            </Paragraph>
            <Paragraph>
              Your use of Auto Meeting will be regarded as acceptance of our
              practices around privacy and personal information. If you have any
              questions about how we handle user data and personal information,
              feel free to contact us.
            </Paragraph>
            <Paragraph>This policy is effective as of 1 July 2020.</Paragraph>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Privacy;
