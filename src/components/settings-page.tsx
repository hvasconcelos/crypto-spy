
import React  from "react";
import styled from "styled-components";

const SectionContainer = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
`;

const Section = styled.div `
    padding: 20px;
`;


const SectionTitle = styled.div `
    width: 100%;
    font-size: 1.0rem;
    color: #666;
    font-weight: 700;
    border-bottom: 1px solid #555;
`;

const SectionBody = styled.div ``;


const SettingsComponent = ()=> {

    return <SectionContainer>
        <Section>
            <SectionTitle>Settings</SectionTitle>
            <SectionBody>

            </SectionBody>
        </Section>
        <Section>
            <SectionTitle>Settings</SectionTitle>
            <SectionBody>

            </SectionBody>
        </Section>
    </SectionContainer>;
};

export default SettingsComponent;