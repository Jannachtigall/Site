import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


const Main = () => {
    return (
        <main className="main">

            <section className="greetings">
                <Carousel data-bs-theme="dark" controls={false} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 intro-img"
                            src={require("../img/jpg/main_back.jpg")}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="intro">
                                <div className="intro__wrapper">
                                        <h2 className="intro__title">
                                            НИЖЕГОРОДСКАЯ ЛАВАНДОВАЯ ФЕРМА
                                        </h2>
                                        <Link className="intro__a">
                                            Посетить ферму
                                        </Link>
                                    </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 intro-img"
                        src={require("../img/jpg/tents.jpg")}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <div className="intro">
                                <div className="intro__wrapper">
                                        <h2 className="intro__title">
                                            ШАТЁР И БЕСЕДКИ ДЛЯ ВАШИХ СОБЫТИЙ 
                                        </h2>
                                        <Link className="intro__a">
                                            Зарбонировать
                                        </Link>
                                    </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 intro-img"
                            src={require("../img/jpg/traktor.jpg")}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div className="intro">
                                <div className="intro__wrapper">
                                        <h2 className="intro__title">
                                            ЛАВАНДА И СУХОЦВЕТЫ ДЛЯ ВАШЕГО БИЗНЕСА
                                        </h2>
                                        <Link className="intro__a">
                                            Перейти в каталог
                                        </Link>
                                    </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 intro-img"
                        src={require("../img/jpg/products.jpg")}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div className="intro">
                                <div className="intro__wrapper">
                                        <h2 className="intro__title">
                                            БУКЕТЫ И НАТУРАЛЬНАЯ ПРОДУКЦИЯ ИЗ ЛАВАНДЫ
                                        </h2>
                                        <Link className="intro__a">
                                            Перейти в магазин
                                        </Link>
                                    </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className="gallery">
                <div className="gallery__wrapper">
                    <div className="gallery__content">
                        <h2 className="section-title gallery-title" style={{color: '#7F49DD'}}>Прованс в наших широтах</h2>
                        <p className="gallery-subtitle">
                            Всего в сорока километрах от Нижнего Новгорода, близ деревни Зубаниха Дальнеконстантиновского района расположилось небольшая лавандовая ферма. На поле растёт более 10 тысяч лавандовых кустов. Ежегодно количество растений прибавляется. В течение ближайших пяти лет поле станет самым большим в средней полосе России. Наши гости говорят, что на поле царит атмосфера Прованса. Ну и куда же без наших знаменитых нижегородских закатов.
                        </p>
                        <Link href="#" className="gallery-link">ПОСЕТИТЬ ФЕРМУ</Link>
                    </div>
                    <Carousel className="gallery-slider">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel-img"
                                src={require("../img/jpg/g1.jpg")}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel-img"
                                src={require("../img/jpg/g2.jpg")}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel-img"
                                src={require("../img/jpg/g3.jpg")}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>

            <section className="offers">
                <div className="wrapper">
                    <h2 className="offers__title section-title">Мы предлагаем</h2>
                    <div className="offers__cards">
                        <figure className="offers__card offers__card_size_sm">
                            <img src={require("../img/jpg/confortable_infrastructure.jpg")} alt="Tents" className="offers__card-pic"/>
                            <div className="offers__card-title">
                                <h3>Удобная инфраструктура</h3>
                                <p className="offers__card-subtitle">На территории фермы создана инфраструктура для комфортного время препровождения.</p>
                                <a href="#" className="offers__card-link">Подробнее</a>
                            </div>
                        </figure>
                        <figure className="offers__card offers__card_size_sm">
                            <img src={require("../img/jpg/master-classes.jpg")} alt="Tents" className="offers__card-pic"/>
                            <div className="offers__card-title">
                                <h3>Мастер-классы</h3>
                                <p className="offers__card-subtitle">Мы регулярно проводим мастер-классы и мероприятия на свежем воздухе. Каждый сможет найти занятие по душе!</p>
                                <a href="#" className="offers__card-link">Подробнее</a>
                            </div>
                        </figure>
                        <figure className="offers__card offers__card_size_sm">
                            <img src={require("../img/jpg/foodtours_cafes.jpg")} alt="Tents" className="offers__card-pic"/>
                            <div className="offers__card-title">
                                <h3>Гастротуры и кафе</h3>
                                <p className="offers__card-subtitle">На территории комплекса работает кафе, а также можно поучаствовать в мероприятиях, посвящённых изысканной кухне.</p>
                                <a href="#" className="offers__card-link">Подробнее</a>
                            </div>
                        </figure>
                        <figure className="offers__card offers__card_size_lg">
                            <img src={require("../img/jpg/tents.jpg")} alt="Tents" className="offers__card-pic"/>
                            <div className="offers__card-title">
                                <h3>Шатёр и беседки для ваших событий</h3>
                                <p className="offers__card-subtitle">Просторный торжественный шатёр, а также уютные беседки можно арендовать для вашего праздника.</p>
                                <a href="#" className="offers__card-link">Подробнее</a>
                            </div>
                        </figure>
                        <figure className="offers__card offers__card_size_lg">
                            <img src={require("../img/jpg/natural_lavender_products.jpg")} alt="Natural" className="offers__card-pic"/>
                            <div className="offers__card-title">
                                <h3>Шатёр и беседки для ваших событий</h3>
                                <p className="offers__card-subtitle">Гидролат, ароматические масла, лавандовый мёд, мыло и натуральная косметика.</p>
                                <a href="#" className="offers__card-link">Подробнее</a>
                            </div>
                        </figure>
                    </div>
                </div>
            </section>

            <section className="path">
                <div className="path__wrapper">
                    <div className="path__content">
                        <h2 className="section-title path-title" style={{color: '#FFFFFF'}}>Как добраться до  фермы</h2>
                        <ul className="path__buttons__list">
                            <li><button className="path__button" id="NN">Нижний Новгород</button></li>
                            <li><button className="path__button" id="Kst">Кстово</button></li>
                            <li><button className="path__button" id="Dzr">Дзержинск</button></li>
                            <li><button className="path__button" id="Sar">Саранск</button></li>
                            <li><button className="path__button" id="Arz">Арзамас</button></li>
                            <li><button className="path__button" id="Kzn">Казань</button></li>
                            <li><button className="path__button" id="Bor">Бор</button></li>
                            <li><button className="path__button" id="Msk">Москва</button></li>
                        </ul>
                    </div>
                    <div className="path__map">
                        <div className="map" id="map"></div>
                    </div>
                </div>
            </section>

            <section className="instruction">
                <div className="wrapper">
                    <h2 className="section-title" style={{color: '#7F49DD'}}>Как попасть на ферму?</h2>
                    <div className="instruction__cards">
                        <div className="instruction__card">
                            <div className="instruction__card-pic dashed-line">
                                <img src={require("../img/png/i1.png")} alt=""/>
                            </div>
                            <a className="instruction__card-link" href="#">Купить билет на сайте</a>
                            <p className="instruction__card-desc">
                                Переходя по ссылке, выберите дату
                                и купите билет на каждого
                                взрослого человека. Детям до 12 лет
                                (включительно) билет посещения не
                                нужен. Сезон посещения продлится
                                2 месяца (с 20 июня по 20 августа).
                                Информация о цветении и фото
                                размещаются на наших страницах в
                                первых числах месяца, исходя из
                                актуального состояния полей.
                            </p>
                        </div>
                        <div className="instruction__card">
                            <div className="instruction__card-pic dashed-line">
                                <img src={require("../img/png/i2.png")} alt=""/>
                            </div>
                            <a className="instruction__card-link" href="#">Ознакомиться с маршрутом</a>
                            <p className="instruction__card-desc">
                                Подробный маршрут указан ниже.
                                Также для вашего удобства
                                добавлена геометка, данные
                                которой вы можете скопировать и
                                добавить в свой навигатор.
                                Основной ориентир - деревня
                                Зубаниха.
                            </p>
                        </div>
                        <div className="instruction__card">
                            <div className="instruction__card-pic">
                                <img src={require("../img/png/i3.png")} alt=""/>
                            </div>
                            <a className="instruction__card-link" href="#">Приехать к нам</a>
                            <p className="instruction__card-desc">
                                Вы можете приехать как на
                                собственном автомобиле, так и на
                                общественном транспорте. Каждый
                                день из Нижнего Новгорода до
                                деревни Зубаниха ходят регулярные
                                рейсы. Необходимо заранее
                                уточнить расписание автобусов,
                                связавшись со справочной
                                автостанции Щербинки. Прямо до
                                фермы можно также добраться на
                                такси, конечный адрес: Лавандовая
                                ферма.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="route">
                <div className="wrapper">
                    <h2 className="geolocation__title">Геолокация и подробный маршрут</h2>
                    <div className="route__info">
                        <div className="route__pics">
                            <div className="route__pic">
                                <span className="route__span">1</span>
                                <img src={require("../img/png/r1.png")} alt=""/>
                            </div>
                            <div className="route__pic">
                                <span className="route__span">2</span>
                                <img src={require("../img/png/r2.png")} alt=""/>
                            </div>
                            <div className="route__pic">
                                <span className="route__span">3</span>
                                <img src={require("../img/png/r3.png")} alt=""/>
                            </div>
                            <div className="route__pic">
                                <span className="route__span">4</span>
                                <img src={require("../img/png/r4.png")} alt=""/>
                            </div>
                        </div>
                        <div className="route__paragraph">
                            <span className="route__span">1.</span>
                            <p className="route__desc">На арзамасскую трассу из Нижнего Новгорода можно выехать через Ольгино.
                                Убедитесь что вы движетесь именно в сторону Арзамаса или Саранска.</p>
                        </div>
                        <div className="route__paragraph">
                            <span className="route__span">2.</span>
                            <p className="route__desc">Двигайтесь 45 км по Арзамасской трассе никуда не съезжая до указателя
                                Кужутки/КТП Янтарный.</p>
                        </div>
                        <div className="route__paragraph">
                            <span className="route__span">3.</span>
                            <p className="route__desc">Добравшись до указателя, поверните налево и двигайтесь все время прямо.</p>
                        </div>
                        <div className="route__paragraph">
                            <span className="route__span">4.</span>
                            <p className="route__desc">Двигаясь по главной дороге, оставьте позади населенный пункт Зубаниха.
                                Придерживайтесь асфальтированной дороги до баннера “Лавандовая Ферма”.
                                Поверните направо и припаркуйте автомобиль в свободном месте. </p>
                        </div>
                    </div>
                    <Link className="buy__button" href="#">КУПИТЬ БИЛЕТ</Link>
                </div>
            </section>
        </main>

    )
}

export default Main;