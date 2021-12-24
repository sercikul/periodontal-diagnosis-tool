import React from "react";
import {Header, Text, MiddleSection, Subtitle, CenteredText, ExtraMargin} from './About.elements';
import "./About.css";
import {Container} from "../../Global.Styles";

const AboutComponents = () => {
    return (
        <>
            <Container>
                <MiddleSection>
                    <Header>About</Header>
                    <Subtitle>Why We created: UCL Eastman Diagnosis Tool (EDIT)</Subtitle>
                    <Text>Our vision is to make it easy and interactive for the clinician to obtain periodontal diagnosis, while achieving uniformity and precision.</Text>

                    <Text>The ability to obtain a uniform diagnosis in periodontology is important for clinicians to properly diagnose and treat patients.
                        It would also aid researchers and epidemiologists. For clinicians, it should allow professionals to achieve an unambiguous diagnosis under identical conditions.
                        For researchers, it will facilitate comparability and classification of patients with the similar clinical presentation into specific categories.</Text>

                    <CenteredText>Created with passion for clinical excellence.</CenteredText>
                    <Subtitle>Why Use: UCL Eastman Diagnosis Tool (EDIT)</Subtitle>

                    <ul id="ul">A free to use tool that will save your time on reaching a diagnosis</ul>
                    <ul id="ul">The tool will guide you through the two possible pathways to reach the diagnosis: either based on the new classification introduced by American Academy of Periodontology (AAP) and the European Federation of Periodontology (EFP) or on the British Society of Periodontology (BSP) implementation of the new classification</ul>
                    <ul id="ul">Easy to use and efficient. It will guide you to answer all the questions required to obtain correct diagnosis and will help to take into account all factors that might contribute to the stage or severity of disease</ul>
                    <ul id="ul">Incorporating technology and offering a convenient periodontal chart you can use for your practice</ul>
                    <ul id="ul">Contributes to the uniformity and precision in reaching periodontal diagnosis for the benefit of patients. Early recognition and diagnosis of periodontal conditions will provide you basic guidance on treatment needed and aid making decision whether to refer</ul>
                    <Text>We introduce a paradigm shift using technology to enhance periodontal diagnosis and structure clinical decision making, aiming for clinical excellence.</Text>

                    <ExtraMargin/>

                    <Text>A periodontal diagnosis is an important label that clinicians mark patient’s disease with, while classification system gives a framework to study periodontal disease and guides treatment. Dental practitioners play a key role in early recognition and diagnosis of periodontal conditions. The correct diagnosis is an essential component of patient management and provides clinician with basic guidance on treatment need or referral.</Text>
                    <Text>A new classification has been recently introduced at The World Workshop in Chicago. It was developed to update the current classification scheme, incorporating new evidence obtained in the last twenty years about periodontal and peri-implant diseases. Several decision-making algorithms and manuscripts have been published introducing clarifications and explaining “grey zones” of the new classification. This made us realise of possible struggle and difficulties when it comes for clinicians implementing the new classification algorithm.</Text>
                    <Text>The British Society of Periodontology (BSP) developed guidance on how to integrate the new classification with clinical parameters currently being used in the UK, for example, such as the basic periodontal examination (BPE). It has been suggested that GDPs, dental therapists and hygienists based in the UK, should use the BSP proposed implementation of the new classification in their routine clinical practice. However, for global uniformity purposes, researchers and clinicians were offered to use the international version at their discretion.</Text>

                    <CenteredText>Created for clinicians with excellent patient care in mind!</CenteredText>

                    <Subtitle>Disclaimer: Localised/Generalised Gingivitis</Subtitle>
                    <Text>This tool is not able to distinguish Drug-influenced gingival enlargement or gingival diseases – non-dental plaque induced. Therefore, the final diagnosis should be assigned at the discretion of the clinician. Please consider the following:</Text>
                    <ul id="ul">Hereditary gingival fibromatosis</ul>
                    <ul id="ul">Specific Infections of bacterial, viral or fungal origin</ul>
                    <ul id="ul">Inflammatory and immune conditions</ul>
                    <ul id="ul">Reactive processes (epulides, etc)</ul>
                    <ul id="ul">Neoplasms</ul>
                    <ul id="ul">Traumatic lesions</ul>
                    <Text>For more information on diagnosing drug-influenced gingival enlargement (Murakami et al., 2018) or gingival diseases – non-dental plaque induced (Holmstrup et al., 2018), please refer to the consensus report papers.</Text>

                    <ExtraMargin/>

                    <Subtitle>Disclaimer: "Clinical gingival health on a reduced periodontium in a stable periodontitis patient” and “Gingivitis in a patient with a history of periodontitis"</Subtitle>
                    <Text>This periodontal tool is not able to distinguish a case of periodontal health on reduced periodontium in a non-periodontitis patient (recession, crown lengthening) from a case of gingival health on a reduced periodontium in stable periodontitis patients. Therefore, the final diagnosis should be assigned at the discretion of the clinician.</Text>

                    <Subtitle>Disclaimer: Periodontitis</Subtitle>
                    <Text>This tool is not able to distinguish Necrotizing Periodontal Diseases (Herrera et al., 2018) or Periodontitis as Manifestation of Systemic Diseases (Jepsen et al., 2018, Albandar et al., 2018). For more information please refer to the consensus papers.</Text>

                    <Subtitle>Best Browsers For The Best Experience: Google Chrome and Microsoft Edge</Subtitle>

                    <p id="developer">Developed By:</p>
                    <a id="developer" href="https://www.linkedin.com/in/alekseisukhov/" target="_blank" rel="noopener noreferrer">Aleksei Sukhov</a>
                    <a id="developer" href="https://www.linkedin.com/in/jawahar-tunuguntla-16b45815b/" target="_blank" rel="noopener noreferrer">Jawahar Tunuguntla</a>
                    <a id="developer" href="https://www.linkedin.com/in/sercihan-kulak-723351170/" target="_blank" rel="noopener noreferrer">Sercihan Kulak</a>

                    <p id="developer"></p>
                    <p id="developer">Periodontology Unit UCL Eastman Dental Institute:</p>
                    <p id="developer">Dr Orishko</p>
                    <p id="developer">Dr Moreno Sancho</p>
                    <p id="developer">Prof Needleman</p>
                    <p id="developer">Prof Eaton</p>
                    <p id="developer">Prof D’Aiuto</p>
                </MiddleSection>
            </Container>
        </>
    )
}

export default AboutComponents;