import Button from "components/Button"
import React from "react"

import { MdOutlineSchool } from "react-icons/md";

const Banner = () => {
    return (
        <section className="overflow-hidden bg-blue md:grid md:grid-cols-2 md:items-center gap-10 px-8 py-10 md:px-12 md:py-3 lg:px-16 lg:py-12">
            <div className="">
                <div className="mx-auto max-w-xl text-left">
                    <h2 className="font-bold text-4xl leading-[50px] sm:text-5xl sm:leading-[4rem] text-white">
                        La plateforme qui vous aide à trouver votre formation
                    </h2>

                    <p className="hidd md:mt-4 md:block text-white">
                        Avec notre Unistaf, trouvez les écoles habilitées et les diplômes accréditées au Sénégal !
                    </p>

                    <div className="flex flex-wrap gap-3 mt-10">
                        <Button
                            icon={{
                                name: MdOutlineSchool,
                                color: "#fff",
                                size: 25
                            }}
                            className="bg-blueSecondary text-center text-white flex-auto h-11"
                            title={"Trouver une école"}
                        />
                        <Button
                            className="bg-white text-blueSecondary text-center flex-auto h-11"
                            title={"Trouver un diplôme"}
                            icon={{
                                name: MdOutlineSchool,
                                color: "rgba(75, 75, 239, 1)",
                                size: 25
                            }}
                        />
                    </div>
                </div>
            </div>

            <img
                alt="Violin"
                src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="hidden md:block h-full w-full object-cover sm:self-end sm:rounded-ss-[30px] md:rounded-ss-[60px]"
            />
        </section>
    )
}

export default Banner