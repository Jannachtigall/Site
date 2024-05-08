class Api {
    constructor() {
        this.url = 'http://localhost:8080'
        this.headers = {
            'Content-Type': 'application/json'
        }
    }

    getType() {
        return fetch(`${this.url}/categories`, {headers: this.headers})
            .then(response => response.json())
            .then(data => data)
    }

    getProducts() {
        return fetch(`${this.url}/products`, {headers: this.headers})
            .then(response => response.json())
            .then(data => data)
    }

    createOrder(order) {
        return fetch(`${this.url}/orders`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(order)
        }).then(response => response.json())
    }
}


export const api = new Api()