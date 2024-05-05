let map;

function init() {
    map = new ymaps.Map("map", {
        center: [55.928973, 44.017962],
        zoom: 15,
    });
    let placemark = new ymaps.Placemark([55.928973, 44.017962], {}, {});
    removing(map);
    map.geoObjects.add(placemark);
}

function removing(map) {
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('zoomControl');
}

function setRoute(control, city) {
    control.routePanel.state.set({
        type: 'masstransit',
        fromEnabled: false,
        from: `${city}`,
        toEnable: true,
        to: [55.928973, 44.017962]
    })
}

ymaps.ready(init);

document.getElementById('NN').addEventListener('click', ymaps.ready(function (){
    let control = map.controls.get('routePanelControl')
    let city = 'Нижний Новгород';
    setRoute(control, city);
}));