import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
    render (){
        return(
            <Html>
                <Head>
                   <link rel="shortcut icon" href="favicon-32x32.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )

    }
}