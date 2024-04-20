import "../styles/globals.css";

import Layout from "../Components/layout";

function MyApp({ Component, pageProps }) {
  // console.log(Component);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
