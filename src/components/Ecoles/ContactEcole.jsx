import React from "react"
import { HiPhone } from "react-icons/hi"
import { MdEmail } from "react-icons/md"

const ContactItem = ({ icon: Icon, label }) => {
    return <p className="flex items-center gap-3">
        <Icon.name />
        <span>{label}</span>
    </p>
}

const ContactEcole = () => {
    return (
        <div className="shadow-xl min-w-[300px] p-5 rounded-lg">
            <h4 className="text-center text-xl font-semibold mb-3">Contact</h4>
            <ContactItem
                icon={{
                    name: HiPhone
                }}
                label={"+221 77 000 00 00"}
            />
            <ContactItem
                icon={{
                    name: MdEmail
                }}
                label={"unistaf@gmail.com"}
            />
        </div>
    )
}

export default ContactEcole