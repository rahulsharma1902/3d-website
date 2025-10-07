import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import "@/styles/globals.css"; // Global styles
import { Rock_Salt, Poppins } from "next/font/google";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Layout from "./components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOSWrapper from "./components/AOSWrapper";

// Load Local Fonts
const ppFormulaCondensed = localFont({
  src: [
    {
      path: "/fonts/PPFormulaCondensedBlack.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-ppformula",
});

const ppFormulaExtra = localFont({
  src: [
    {
      path: "/fonts/PPFormulaExtrabold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-ppformulabold",
});

// Load Google Fonts
const rockSalt = Rock_Salt({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Pages where `custom-module.css` should NOT be applied
  const excludedRoutes = ["/", "/wall"];
  const isExcluded = excludedRoutes.includes(router.pathname);

  useEffect(() => {
    // Add the Crisp chat script
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "94c2fbf6-35dd-41d3-9bb9-d56af2d62ef2";

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main
      className={`${rockSalt.className} ${ppFormulaCondensed.variable} ${ppFormulaExtra.variable} ${poppins.className}`}
    >
      {/* Import external styles and scripts */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"
        integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css"
        integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      ></script>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
        integrity="sha512-HGOnQO9+SP1V92SrtZfjqxxtLmVzqZpjFFekvzZVWoiASSQgSr4cw9Kqd2+l8Llp4Gm0G8GIFJ4ddwZilcdb8A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></script>

      {/* Conditionally include the global CSS */}
      {!isExcluded && (
        <style jsx global>{`@import "/styles/custom-module.module.css";`}</style>
      )}
      <AOSWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AOSWrapper>
    </main>
  );
}
