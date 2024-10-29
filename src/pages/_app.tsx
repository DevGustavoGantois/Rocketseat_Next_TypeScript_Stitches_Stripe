import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

    return (
    <Container>
        <Header>
            <Image src="/logo.svg" width={400} alt="" />
        </Header>
        <Component {...pageProps} />
    </Container>
    )
}