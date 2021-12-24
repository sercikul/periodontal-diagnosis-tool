import React from "react";
import Faq from "react-faq-component";
import {styles, config} from "./FAQStyles";
import {data} from "../../Pages/FAQPage/FAQData";
import {Container} from "../../Global.Styles";


const FAQComponents = () => {
    return (
        <>
            <Container>
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />
            </Container>
        </>
    )
}

export default FAQComponents;