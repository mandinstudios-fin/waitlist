import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
type IconItem = {
    icon: any; 
    link: string;
}
export const icons: IconItem[] = [
    {
        icon: FaInstagram,
        link: ""
    },
    {
        icon: FaTelegram,
        link: ""
    },
    {
        icon: FaTwitter,
        link: ""
    }
];

type AboutusItems = {
    title: string;
    description: string;
}
export const aboutItems: AboutusItems[] = [
    {
        title: "Seamless Integration with Base Chain and Coinbase Smart Wallet",
        description: "Initially, the Olin Token will be launched on the Base Chain. With the integrated Base Wallet in our application, users can effortlessly create their own self-custodial wallet using their fingertips. Additionally, with the latest Coinbase Smart Wallet enables users to create their wallets easily using passkeys.",
    },
    {
        title: "Introducing Physical Crypto Gift Cards",
        description: "In a pioneering move, we are introducing physical gift cards for crypto, allowing users to easily load and transfer tokens with unparalleled ease. These gift cards will be available for individuals and institutions alike, facilitating seamless crypto transfers through a familiar physical card model. Imagine the joy of presenting someone with a unique crypto gift, encapsulating the future of finance in a tangible form.",
    },
    {
        title: "Bridging the Fiat-Crypto Gap",
        description: "We understand the importance of bridging the gap between traditional finance and the crypto world. That's why we're taking a leap forward by integrating on-ramp providers into our platform. With this groundbreaking feature, users can effortlessly convert their crypto coins into native fiat currencies with just a few clicks, providing unparalleled convenience and accessibility.",
    }
]