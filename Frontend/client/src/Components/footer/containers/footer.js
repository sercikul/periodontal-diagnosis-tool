import React from 'react'
import Footer from '../footer_index'
import Icon from '../../icons'


function YearCopyright() {
    return <p>Copyright &copy; {new Date().getFullYear()}, UCL. All rights reserved.</p>
}


export function FooterContainer() {
    return(
        <div className="footer_to_print">
            <Footer>
                <Footer.Wrapper>
                    <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="https://www.ucl.ac.uk/eastman/" target="_blank">Eastman Dental Institute</Footer.Link>
                        <Footer.Link href="https://www.ucl.ac.uk/eastman/about-us/eastman-dental-hospital" target="_blank">Eastman Dental Hospital</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Support</Footer.Title>
                        <Footer.Link href="https://www.ucl.ac.uk/eastman/about-us/contact-us" target="_blank">Contact Us</Footer.Link>
                        <Footer.Link href="\faq">FAQ</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Resources</Footer.Title>
                        <Footer.Link href="https://www.efp.org/publications-education/new-classification/" target="_blank">AAP/EFP Classification</Footer.Link>
                        <Footer.Link href="https://www.bsperio.org.uk/news/new-classification-of-periodontal-and-peri-implant-diseases-and-conditions" target="_blank">BSP Implementation</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.SocialColumn>
                            <Footer.Link href="https://www.facebook.com/ucleastman/" target="_blank"><Icon className="fab fa-facebook-f"/></Footer.Link>
                            <Footer.Link href="https://www.instagram.com/ucleastman/?hl=en" target="_blank"><Icon className="fab fa-instagram"/></Footer.Link>
                            <Footer.Link href="https://twitter.com/ucleastman?lang=en" target="_blank"><Icon className="fab fa-twitter"/></Footer.Link>
                            <Footer.Link href="https://www.youtube.com/channel/UCp6JkfKf2b3G-M57qfP8viQ" target="_blank"><Icon className="fab fa-youtube"/></Footer.Link>
                        </Footer.SocialColumn>
                    </Footer.Column>
                    </Footer.Row>
                    <hr/>
                    <Footer.Copyright>
                        <YearCopyright />
                    </Footer.Copyright>
                </Footer.Wrapper>
            </Footer>
        </div>
    )
}