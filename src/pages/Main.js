import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


const Main = () => {
    return (
        <main class="main">

            <section class="greetings">
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

            <section class="gallery">
                <div class="gallery__wrapper">
                    <div class="gallery__content">
                        <h2 class="section-title gallery-title" style={{color: '#7F49DD'}}>Прованс в наших широтах</h2>
                        <p class="gallery-subtitle">
                            Всего в сорока километрах от Нижнего Новгорода, близ деревни Зубаниха Дальнеконстантиновского района расположилось небольшая лавандовая ферма. На поле растёт более 10 тысяч лавандовых кустов. Ежегодно количество растений прибавляется. В течение ближайших пяти лет поле станет самым большим в средней полосе России. Наши гости говорят, что на поле царит атмосфера Прованса. Ну и куда же без наших знаменитых нижегородских закатов.
                        </p>
                        <Link href="#" class="gallery-link">ПОСЕТИТЬ ФЕРМУ</Link>
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

            <section class="offers">
                <div class="wrapper">
                    <h2 class="offers__title section-title">Мы предлагаем</h2>
                    <div class="offers__cards">
                        <figure class="offers__card offers__card_size_sm">
                            <img src={require("../img/jpg/confortable_infrastructure.jpg")} alt="Tents" class="offers__card-pic"/>
                            <div class="offers__card-title">
                                <h3>Удобная инфраструктура</h3>
                                <p class="offers__card-subtitle">На территории фермы создана инфраструктура для комфортного время препровождения.</p>
                                <a href="#" class="offers__card-link">Подробнее</a>
                            </div>
                        </figure>
                        <figure class="offers__card offers__card_size_sm">
                            <img src={require("../img/jpg/master-classes.jpg")} alt="Tents" class="offers__card-pic"/>
                            <div class="offers__card-title">
                                <h3>Мастер-классы</h3>
                                <p class="offers__card-subtitle">Мы регулярно проводим мастер-классы и мероприятия на свежем воздухе. Каждый сможет найти занятие по душе!</p>
                                <a href="#" class="offers__card-link">Подробнее</a>
                            </div>
                        </figure>
                        <figure class="offers__card offers__card_size_sm">
                            <img src={require("../img/jpg/foodtours_cafes.jpg")} alt="Tents" class="offers__card-pic"/>
                            <div class="offers__card-title">
                                <h3>Гастротуры и кафе</h3>
                                <p class="offers__card-subtitle">На территории комплекса работает кафе, а также можно поучаствовать в мероприятиях, посвящённых изысканной кухне.</p>
                                <a href="#" class="offers__card-link">Подробнее</a>
                            </div>
                        </figure>
                        <figure class="offers__card offers__card_size_lg">
                            <img src={require("../img/jpg/tents.jpg")} alt="Tents" class="offers__card-pic"/>
                            <div class="offers__card-title">
                                <h3>Шатёр и беседки для ваших событий</h3>
                                <p class="offers__card-subtitle">Просторный торжественный шатёр, а также уютные беседки можно арендовать для вашего праздника.</p>
                                <a href="#" class="offers__card-link">Подробнее</a>
                            </div>
                        </figure>
                        <figure class="offers__card offers__card_size_lg">
                            <img src={require("../img/jpg/natural_lavender_products.jpg")} alt="Natural" class="offers__card-pic"/>
                            <div class="offers__card-title">
                                <h3>Шатёр и беседки для ваших событий</h3>
                                <p class="offers__card-subtitle">Гидролат, ароматические масла, лавандовый мёд, мыло и натуральная косметика.</p>
                                <a href="#" class="offers__card-link">Подробнее</a>
                            </div>
                        </figure>
                    </div>
                </div>
            </section>

            <section class="path">
                <div class="path__wrapper">
                    <div class="path__content">
                        <h2 class="section-title path-title" style={{color: '#FFFFFF'}}>Как добраться до  фермы</h2>
                        <ul class="path__buttons__list">
                            <li><button class="path__button" id="NN">Нижний Новгород</button></li>
                            <li><button class="path__button" id="Kst">Кстово</button></li>
                            <li><button class="path__button" id="Dzr">Дзержинск</button></li>
                            <li><button class="path__button" id="Sar">Саранск</button></li>
                            <li><button class="path__button" id="Arz">Арзамас</button></li>
                            <li><button class="path__button" id="Kzn">Казань</button></li>
                            <li><button class="path__button" id="Bor">Бор</button></li>
                            <li><button class="path__button" id="Msk">Москва</button></li>
                        </ul>
                    </div>
                    <div class="path__map">
                        <div class="map" id="map"></div>
                    </div>
                </div>
            </section>

            <section class="instruction">
                <div class="wrapper">
                    <h2 class="section-title" style={{color: '#7F49DD'}}>Как попасть на ферму?</h2>
                    <div class="instruction__cards">
                        <div class="instruction__card">
                            <div class="instruction__card-pic dashed-line">
                                <img src={require("../img/png/i1.png")} alt=""/>
                            </div>
                            <a class="instruction__card-link" href="#">Купить билет на сайте</a>
                            <p class="instruction__card-desc">
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
                        <div class="instruction__card">
                            <div class="instruction__card-pic dashed-line">
                                <img src={require("../img/png/i2.png")} alt=""/>
                            </div>
                            <a class="instruction__card-link" href="#">Ознакомиться с маршрутом</a>
                            <p class="instruction__card-desc">
                                Подробный маршрут указан ниже.
                                Также для вашего удобства
                                добавлена геометка, данные
                                которой вы можете скопировать и
                                добавить в свой навигатор.
                                Основной ориентир - деревня
                                Зубаниха.
                            </p>
                        </div>
                        <div class="instruction__card">
                            <div class="instruction__card-pic">
                                <img src={require("../img/png/i3.png")} alt=""/>
                            </div>
                            <a class="instruction__card-link" href="#">Приехать к нам</a>
                            <p class="instruction__card-desc">
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

            <section class="route">
                <div class="wrapper">
                    <h2 class="geolocation__title">Геолокация и подробный маршрут</h2>
                    <div class="route__info">
                        <div class="route__pics">
                            <div class="route__pic">
                                <span class="route__span">1</span>
                                <img src={require("../img/png/r1.png")} alt=""/>
                            </div>
                            <div class="route__pic">
                                <span class="route__span">2</span>
                                <img src={require("../img/png/r2.png")} alt=""/>
                            </div>
                            <div class="route__pic">
                                <span class="route__span">3</span>
                                <img src={require("../img/png/r3.png")} alt=""/>
                            </div>
                            <div class="route__pic">
                                <span class="route__span">4</span>
                                <img src={require("../img/png/r4.png")} alt=""/>
                            </div>
                        </div>
                        <div class="route__paragraph">
                            <span class="route__span">1.</span>
                            <p class="route__desc">На арзамасскую трассу из Нижнего Новгорода можно выехать через Ольгино.
                                Убедитесь что вы движетесь именно в сторону Арзамаса или Саранска.</p>
                        </div>
                        <div class="route__paragraph">
                            <span class="route__span">2.</span>
                            <p class="route__desc">Двигайтесь 45 км по Арзамасской трассе никуда не съезжая до указателя
                                Кужутки/КТП Янтарный.</p>
                        </div>
                        <div class="route__paragraph">
                            <span class="route__span">3.</span>
                            <p class="route__desc">Добравшись до указателя, поверните налево и двигайтесь все время прямо.</p>
                        </div>
                        <div class="route__paragraph">
                            <span class="route__span">4.</span>
                            <p class="route__desc">Двигаясь по главной дороге, оставьте позади населенный пункт Зубаниха.
                                Придерживайтесь асфальтированной дороги до баннера “Лавандовая Ферма”.
                                Поверните направо и припаркуйте автомобиль в свободном месте. </p>
                        </div>
                    </div>
                    <Link class="buy__button" href="#">КУПИТЬ БИЛЕТ</Link>
                </div>
            </section>
        </main>

    )
}

export default Main;