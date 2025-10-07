import { Html, Head, Main, NextScript } from "next/document";

export default function Document(params) {

  const currentPage = params?.__NEXT_DATA__?.page || "/"; 
  const bodyClass = currentPage === "/" ? "home-page" : currentPage ;
  return (
    <Html lang="en" className={bodyClass}>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
