window.onload = function(){

    let map
    function initialize(){
        let mapprop = {
            center: new google.maps.LatLng(-27.648598,-48.577423),
            scrollwheel:false,
            zoom:12,
            mapTypeId:'roadmap'
        }
        map = new google.maps.Map(document.getElementById('mapa'),mapprop)
    }
    function addmarker(lat,long,icon,content,){
        let latlng = {'lat':lat, 'lng':long}

        let marker = new google.maps.Marker({
            position:latlng,
            map:map,
            icon:icon
        })

        let infowindow = new google.maps.InfoWindow({
            content:content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
        })
        google.maps.event.addListener(marker,'click' ,function(){
            infowindow.open(map,marker)
        })
        

    }
    initialize()

    let conteudo = '<p style="color:black;font-size:13px;padding:10px 0;">Meu endereço</p>'
    addmarker(-27.616637,-48.5923228, '',conteudo)
}
