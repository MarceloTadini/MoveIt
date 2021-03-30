import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render(){
        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
                    <meta property="og:image" content="https://raw.githubusercontent.com/rocketseat-education/nlw-04-reactjs/main/.github/logo.png" />
                    <meta property="og:title" content="Move It | by Marcelo Tadini"/>
                    <meta property="og:description" content="Faça pardsadsaadas e alguns exercícios periodicamente enquanto trabalha ou estuda na frente do computador"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />  
                </body>
            </Html>
        )
    }
}