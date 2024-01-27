import React from "react"
import GridList from "react-flexible-list"
import EcoleCardItem from "./EcoleCardItem"
import { useNavigate } from "react-router-dom"

const ListeEcoles = () => {
    const navigate = useNavigate()
    return (
        <GridList
            resourceData={[1, 2, 3, 4, 5, 6, 7]}
            resourceItem={(item) => <EcoleCardItem onClick={() => navigate("Bakeli")} />}
            cardWidth={400}
        />
    )
}

export default ListeEcoles