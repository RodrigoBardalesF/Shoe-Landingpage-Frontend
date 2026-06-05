import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '100%', label: 'Made with local materials' },
    { value: '+1000 hrs', label: 'Of durability' },
    { value: '100%', label: 'Made in Mexico' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Jaguar One",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Xolo Run",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "KORA",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "VANTA",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Alejandro Romo',
        rating: 4.5,
        feedback: "I bought them to hike but ended up using them everyday, they're light, comfortable and have a nice design without being too gaudy."
    },
    {
        imgURL: customer2,
        customerName: 'Alicia Humbenton',
        rating: 4.5,
        feedback: "They feel premium form the first moment. The tightness is firm and the design has a lot of perosnality."
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Jaguar MX Eclipse", link: "/" },
            { name: "ORBITA", link: "/" },
            { name: "Sol de Jade", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nación 21", link: "/" },
            { name: "Horizonte", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "mexicanshoes@email.com", link: "mailto:customer@shoes.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];