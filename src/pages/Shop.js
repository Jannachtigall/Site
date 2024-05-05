import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import "../styles/Shop.css"
import TypeList from "../components/TypeList";
import BasketButton from "../components/BasketButton";
import { ItemList } from "../components/ItemList";
import { Basket } from "../components/Basket";
import { ItemModal } from "../components/ItemModal";

const Shop = () => {
    const [menuActive, setMenuActive] = useState(false)
    const [itemModalActive, setItemModalActive] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <Container>
            <PageHeader 
            title={"Натуральная продукция от лавандовой фермы"}
            margintop={144}
            marginbottom={77}/>
            <TypeList/>
            <PageHeader title={"Популярные товары"}
            margintop={62}
            marginbottom={46}/>
            <ItemList setItemModalActive={setItemModalActive} setSelectedItem={setSelectedItem} />
            <BasketButton active={menuActive} setActive={setMenuActive}/>
            <Basket active={menuActive} setActive={setMenuActive}/>
            <ItemModal active={itemModalActive} setActive={setItemModalActive} item={selectedItem}/>
        </Container>
    )
}

export default Shop;