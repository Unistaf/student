import React from "react"
import Badge from "./Badge"

const BadgeIcon = ({ className, icon: Icon, label }) => {
    return (
        <Badge className={className}>
            <div className="flex items-center gap-1">
                <Icon.name size={Icon.size} /> <span>{label}</span>
            </div>
        </Badge>
    )
}

export default BadgeIcon