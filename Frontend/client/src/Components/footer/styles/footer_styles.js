/*Do npm install --save styled-components
npm i --save-dev @types/styled-components*/
import styled from 'styled-components'

export const Container = styled.div`
    padding: 10px 30px;
    background: radial-gradient(circle, rgba(25,61,103,255) 0%, rgba(25,61,103,255) 100%);
    z-index: 1000;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 50px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 7px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Link = styled.a`
    color: #fff;
    margin-bottom: 5px;
    font-size: 10px;
    text-decoration: none;

    &:hover {
        color: #af1058;
        transition: 200ms ease-in;
    }
`

export const Title = styled.p`
    font-size: 16px;
    color: #fff;
    margin-bottom: 7px;
    font-weight: bold;

`

export const Copyright = styled.a`
    color: white;
    padding: 4px;
    text-align: center;
    font-size: 8px;
`

export const SocialColumn = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
`
