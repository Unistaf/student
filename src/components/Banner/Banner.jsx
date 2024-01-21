import Button from "components/Button"
import React from "react"

import { MdOutlineSchool } from "react-icons/md";
import imgBanner from "assets/imgs/hero-image.png"

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
                            className="bg-white text-blueSecondary text-center h-11 px-10"
                            title={"Trouver une formation"}
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
                src={imgBanner}
                className="hidden md:block h-[400px] w-full object-cover sm:self-end sm:rounded-ss-[30px] md:rounded-ss-[60px] md:rounded-br-[60px] rounded-md"
            />
        </section>
    )
}

export default Banner