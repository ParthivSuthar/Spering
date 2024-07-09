import fb from "../assets/fb.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import youtube from "../assets/youtube.png"
import linkedin from "../assets/linkedin.png"
import location from "../assets/location.png"
import mail from "../assets/mail.png"
import phone from "../assets/call.png" 
import cash from "../assets/f1.png"
import invoice from "../assets/f2.png"
import freelancer from "../assets/f3.png"
import customer from "../assets/f4.png"
import category1 from "../assets/c1.png"
import category2 from "../assets/c2.png"
import category3 from "../assets/c3.png"
import category4 from "../assets/c4.png"
import category5 from "../assets/c5.png"
import category6 from "../assets/c6.png"




export const navLinks = [
    {href: "#", label: "Home"},
    {href: "#", label: "About"},
    {href: "#", label: "Work"},
    {href: "#", label: "Category"},
]

export const socialMedia = [
    {id: 1, image: fb},
    {id: 2, image: instagram},
    {id: 3, image: twitter},
    {id: 4, image: youtube},
    {id: 5, image: linkedin},
]

export const contactDetails = [
    {detail: "Location", image: location},
    {detail: "demo@gmail.com", image: mail},
    {detail: "Call +01 1234567890", image: phone}
]

export const workDetails = [
    {image: cash, num: "$250 Million", desc: "Paid to Freelancers"},
    {image: invoice, num: "2 Million", desc: "Paid Invoices"},
    {image: freelancer, num: "700,000", desc: "Worldwide Freelancer"},
    {image: customer, num: "98%", desc: "Customer Satisfaction Rate"},
]

export const categoryDetails = [
    {image: category1, title: "Design & Arts"},
    {image: category2, title: "Web Development"},
    {image: category3, title: "SEO Markting"},
    {image: category4, title: "Video Edting"},
    {image: category5, title: "Logo Design"},
    {image: category6, title: "Game Design"},
]