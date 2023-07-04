// import GlobalStyle from "../styles";

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <GlobalStyle />
//       <Component {...pageProps} />
//     </>
//   );
// }

import GlobalStyle from "../styles";
import useSWR from "swr";

import { Layout } from "../components/Navigation";
// import Image from "next/image";
// import ArtPiecesPreview from "../components/ArtPiecesPreview";
//import SpotLight from "./components/Navigation/SpotLight";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <div>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} pieces={data} />
      </Layout>
    </div>
  );
}
