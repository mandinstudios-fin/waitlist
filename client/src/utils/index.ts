import xrp from '../assets/Images/coins/Top BTC X-01.svg'
import olin from '../assets/Images/coins/Top BTC OLin-01.svg'
import ethereum from '../assets/Images/coins/Top BTC E-01.svg'
import near from '../assets/Images/coins/Top BTC W-01.svg'
import bitcoin from '../assets/Images/coins/Top BTC B-01.svg'
import ton from '../assets/Images/coins/Top BTC T-01.svg'

import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
type IconItem = {
    icon: any; 
    link: string;
}
export const icons: IconItem[] = [
    {
        icon: FaInstagram,
        link: "https://instagram.com/mandin_studios"
    },
    {
        icon: FaTelegramPlane,
        link: "https://t.me/oliviafinance_xyz"
    },
    {
        icon: FaXTwitter,
        link: "https://x.com/oliviafinance"
    },
    {
        icon: GoArrowUpRight,
        link: "/about"
    },
];

type AboutusItems = {
    title: string;
    description: string;
}
export const aboutItems: AboutusItems[] = [
    {
        title: "Smart Wallet Integration",
        description: "Initially, the Olin Token will be launched on the Base Chain. With the integrated Base Wallet in our application, users can effortlessly create their own self-custodial wallet using their fingertips. Additionally, with the latest Coinbase Smart Wallet enables users to create their wallets easily using passkeys.",
    },
    {
        title: "Physical Crypto Gift Cards",
        description: "In a pioneering move, we are introducing physical gift cards for crypto, allowing users to easily load and transfer tokens with unparalleled ease. These gift cards will be available for individuals and institutions alike, facilitating seamless crypto transfers through a familiar physical card model. Imagine the joy of presenting someone with a unique crypto gift, encapsulating the future of finance in a tangible form.",
    },
    {
        title: "Bridging the Fiat-Crypto Gap",
        description: "We understand the importance of bridging the gap between traditional finance and the crypto world. That's why we're taking a leap forward by integrating on-ramp providers into our platform. With this groundbreaking feature, users can effortlessly convert their crypto coins into native fiat currencies with just a few clicks, providing unparalleled convenience and accessibility.",
    }
]

type CoinItem = {
    icon: any; 
    name: string;
    supply: string;
}
export const coinItems: CoinItem[] = [
    {
        icon: ethereum,
        name: "Ethereum",
        supply: "Infinite",
    },
    {
        icon: bitcoin,
        name: "Bitcoin",
        supply: "21 Million",
    },
    {
        icon: xrp,
        name: "XRP",
        supply: "100 Billion",
    },
    {
        icon: ton,
        name: "TON",
        supply: "5.11 Billion",
    },
    {
        icon: near,
        name: "Near",
        supply: "1 Billion",
    },
    {
        icon: olin,
        name: "Olin",
        supply: "100 Million",
    },
]