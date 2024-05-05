import { observer } from "mobx-react-lite"
import { Context } from "../index"
import { Row } from "react-bootstrap"
import React, { useContext } from "react"
import { Type } from "./Type"

const TypeList = observer(() => {
    const {item} = useContext(Context)

    return (
        <Row className="justify-content-md-center">
            {item.types.map(type => 
                <Type type={type}/>
            )}
        </Row>
    );
})

export default TypeList