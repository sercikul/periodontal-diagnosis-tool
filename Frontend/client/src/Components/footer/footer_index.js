import React from 'react'
import { Container, Wrapper, Row, Column, SocialColumn, Link, Title, Copyright } from './styles/footer_styles'

export default function Footer({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restProps}) {
    return <Column {...restProps}>{children}</Column>
}


Footer.SocialColumn = function FooterSocialColumn({children, ...restProps}) {
    return <SocialColumn {...restProps}>{children}</SocialColumn>
}

Footer.Link = function FooterLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Footer.Copyright = function FooterCopyright({children, ...restProps}) {
    return <Copyright {...restProps}>{children}</Copyright>
}

