import { makeAutoObservable } from "mobx"

export default class BasketStore {
    constructor() {
        this._types = []
        this._items = []
        this._order = {
            items: [],
            fullPrice: 0
        }
        this.fullPrice = 0;
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setItems(items) {
        this._items = items
    }

    addItem(item) {
        if(this._items.find(i => i.id === item.id)) {
            this.countUp(item)
        } else {
            this.fullPrice += item.cost
            this._items = [...this._items, item]
        }
    }
    removeItem(item) {
        this.fullPrice -= item.cost * item.count
        return this._items = this._items.filter(i => i.id !== item.id)
    }

    countUp(item) {
        this.fullPrice += item.cost
        return this._items = this._items.map(i => i.id === item.id ? {...i, count: i.count + 1} : i)
    }

    countDown(item) {
        if (item.count > 1) {
            this.fullPrice -= item.cost
        }
        return this._items = this._items.map(i => i.id === item.id ? {...i, count: i.count > 1 ? i.count - 1 : 1} : i)
    }

    createOrder() {
        this._order.items = this._items
        this._order.fullPrice = this.fullPrice
    }

    get order() {
        return this._order
    }

    get types() {
        return this._types
    }

    get items() {
        return this._items
    }
}