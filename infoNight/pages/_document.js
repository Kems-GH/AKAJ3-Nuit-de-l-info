import React from "react"
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from "next/link"
class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }

    render() {
        return (
            <Html lang='fr'>
                <Head />
                {/*<body  className="bg-backgroundBody1">*/}
                <body >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
