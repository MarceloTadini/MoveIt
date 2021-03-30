import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render(){
        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
                    <meta name="author" content="Marcelo Tadini"/>
                    <meta name="keyword" content="Marcelo Tadini, move, it, moveit, move it, next level week" />
                    <meta name="description" content="Faça pausas e alguns exercícios periodicamente quando o sinal de alerta tocar enquanto trabalha ou estuda na frente do computador" />
                    <meta property="og:image" content="https://avatars.githubusercontent.com/u/57718626?s=460&u=ddffa661d917bb9445326c75bb7b8916405412c1&v=4" />
                    <meta property="og:title" content="Move It | by Marcelo Tadini"/>
                    <meta property="og:description" content="Faça pausas e alguns exercícios periodicamente quando o sinal de alerta tocar enquanto trabalha ou estuda na frente do computador"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />  
                </body>
            </Html>
        )
    }
}