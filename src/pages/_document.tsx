import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
    render (){
        return(
            <Html>
                <Head>
                   <link rel="shortcut icon" href="favicon-32x32.png" type="image/png" />
                   <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
                   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
                   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )

    }
}