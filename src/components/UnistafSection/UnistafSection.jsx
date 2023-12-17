import Section from "components/Section/Section"
import SectionTitle from "components/Section/SectionTitle"
import React from "react"

const UnistafSection = ({ description }) => {
    return (
        <Section>
            <SectionTitle title={"Unistaf"} />
            <p className="my-10 text-xl max-w-screen-md	 m-auto text-center">
                {description}
            </p>
        </Section>
    )
}

export default UnistafSection