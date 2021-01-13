import "../styles/styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Component {...pageProps} />;
}
