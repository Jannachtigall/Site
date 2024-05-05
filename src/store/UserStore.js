import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._itemsInBasket = [
            {
                id: 1,
                name: 'Букет лаванды в крафтовой обертке',
                cost: 1300,
                desc: `Лаванда с Нижегородской лавандовой фермы 
                сохранит аромат и тепло в вашем доме. 
                Поставьте лаванду в вазу без воды и 
                наслаждайтесь умеротворенным араматом. 
                Если аромат лаванды станет слабым, 
                занесите вазу на пару минут во 
                влажную ванную комнату.
                Аромат оживет. Пыль с букета можно
                 сдуть легким воздухом фена для волос.`,
                picture: 'buket1',
                typeId: 2
            },
            {
                id: 2,
                name: 'Лавандовое ведерко',
                cost: 1800,
                desc: `Оригинальный подарок с незабываемым ароматом. 
                Станет оригинальным подарком для друзей и близких.`,
                picture: 'buket2',
                typeId: 2
            },
            {
                id: 3,
                name: 'Лавандовая корзинка',
                cost: 2200,
                desc: `Хит Продаж!!!! 
                Украсит ваш интерьер и наполнит комнату ароматом лаванды.
                Корзинка может быть повторена в двух цветах- белом и коричневом`,
                picture: 'buket3',
                typeId: 2
            },
            {
                id: 4,
                name: 'Саше из нижегородской лаванды',
                cost: 400,
                desc: `Сохраняет аромат более одного года. 
                Положите саше в шкаф и ваше белье и 
                вещи пропитаются легким ароматом лаванды.
                Моль страшно боится этого запаха.`,
                picture: 'sashe1',
                typeId: 6
            },
            {
                id: 5,
                name: 'Лавандовая композиция в шляпной коробке',
                cost: 2300,
                desc: `Оригинальный подарок и восхитительный аромат.`,
                picture: 'buket4',
                typeId: 2
            },
            {
                id: 10,
                name: 'Саженцы, сорт "Синева"',
                cost: 500,
                desc: `Полукустарник. 
                На 3-ий год достигает до 70 см в высоту. 
                Легко переносит наши морозные зимы. 
                Любит легкие, хорошо дренированные грунты 
                и много солнца. Возраст саженца - 1 год.`,
                picture: 'sagen1',
                typeId: 5
            }
        ]
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setItemsInBasket(itemsInBasket) {
        this._itemsInBasket = itemsInBasket
    }

    get isAuth() {
        return this._user
    }

    get user() {
        return this._user
    }

    get itemsInBasket() {
        return this._itemsInBasket
    }
}