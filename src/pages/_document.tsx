import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { getCssText, styled } from "../../stitches.config";

const BodyWrapper = styled("body", {
  fontSize: "1rem",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
});

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link rel="shortcut icon" href="/love_fav.png" type="image/ico" />
          <meta
            property="og:description"
            content="Se preparem para o melhor casório da história!!!"
          />
          <meta property="og:title" content="Casório R & J" />
          <meta
            property="og:image"
            content="http://localhost:3000/love_meta.png"
          />
          <meta property="og:url" content="https://correproaltar.com.br" />
        </Head>
        <BodyWrapper>
          <Main />
          <NextScript />
        </BodyWrapper>
      </Html>
    );
  }
}
