import "../css/index.css";
import App from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Download Auto Meeting</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
