/*funciones para localizaciones*/
function findMe() {
    var output = document.getElementById('map');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(localizacion, error);
    } else {
        output.innerHTML = "<p>Su navegador no soporta Geolocalización</p>";
    }
}

function localizacion(posicion) {
    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;
}

function error() {
    output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
}

function crearMapa() {
    var map = new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'map',
        view: new ol.View({
            center: [0, 0],
            zoom: 2
        })
    });
    var view = new ol.View({
        center: [41.56, -4.63],
        zoom: 7
    });
    map.addControl(new ol.control.ZoomSlider());
}




/*----------Perfil empresa - menu izquierda----------------*/
$(".sidebar-dropdown > a").click(function () {
    $(".sidebar-submenu").slideUp(200);
    if ($(this).parent().hasClass("active")) {
      $(".sidebar-dropdown").removeClass("active");
      $(this).parent().removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this).next(".sidebar-submenu").slideDown(200);
      $(this).parent().addClass("active");
    }
  });
  
  $("#close-sidebar").click(function () {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function () {
    $(".page-wrapper").addClass("toggled");
  });

  $("#newProduc").on('click', function(){
    document.getElementById("menu").innerHTML = '</div>'+
            '<section>'+
              '<form>'+
                '<h1 style="text-align: center;">Agregar Nuevo Producto</h1>'+
                '<div class="row">'+
                '<div class="form-group col-md-6">'+
                  '<label for="usr">Codigo del Producto:</label>'+
                  '<input type="text" class="form-control" id="usr">'+
                '</div>'+
                '<div class="col-md-6" style="margin-top: 30px;">'+
                  '<div class="input-group">'+
                  '<div class="custom-file">'+
                  '<input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon04">'+
                  '<label class="custom-file-label" for="inputGroupFile01">Subir Foto del Producto</label>'+
                  '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
                '<div class="form-group">'+
                  '<label for="pwd">Nombre del Producto:</label>'+
                  '<input type="password" class="form-control" id="pwd">'+
                '</div>'+
                '<div class="form-group">'+
                  '<label for="exampleFormControlSelect1">Tipo de Producto</label>'+
                  '<select class="form-control" id="exampleFormControlSelect1">'+
                    '<option value="null">Seleccione el tipo de producto</option>'+
                    '<option>Electrodomestico</option>'+
                    '<option>Herramientas</option>'+
                    '<option>Juguetes</option>'+
                    '<option>Instrumentos</option>'+
                    '<option>Ferreteria</option>'+
                  '</select>'+
                '<div class="form-group">'+
                  '<label for="comment">Descripcion:</label>'+
                  '<textarea class="form-control" rows="5" id="comment"></textarea>'+
                '</div>'+
                '<section class="container-fluid">'+
                  '<div class="row">'+
                  '<div class="input-group mb-3 col-md-6">'+
                    '<div class="input-group-prepend">'+
                      '<span class="input-group-text">Precio</span>'+
                    '</div>'+
                    '<input type="text" class="form-control">'+
                  '</div>'+
                  '<div class="input-group mb-3 col-md-6">'+
                    '<div class="input-group-prepend">'+
                      '<span class="input-group-text">Cantidad</span>'+
                    '</div>'+
                    '<input type="text" class="form-control">'+
                  '</div>'+
                '</div>'+
                '</section>'+
                '<div style="text-align: center; margin-top: 50px;">'+
                '<button type="button" class="btn btn-success" >Agregar</button>'+
                '<button type="button" class="btn btn-danger">Cancelar</button>'+
                '</div>'+
                '</form>'+
            '</section>'+
          '</div>'
  });

  $("#newSucursal").on('click', function(){
   
          document.getElementById("menu").innerHTML = '<div>'+
          '<h1 style="text-align: center; margin-top: 30px; margin-bottom: 40px;">Agregar Sucursal</h1>'+
          '<form>'+
            '<div class="input-group mb-3">'+
              '<div class="input-group-prepend">'+
                '<span class="input-group-text">Sucursal</span>'+
              '</div>'+
              '<input type="text" class="form-control">'+
            '</div>'+
          '</form>'+
          '<div class="row">'+
            '<div class="col input-group" style="margin-left: 25px; margin-right: 30px;">'+
            '<input style="width: 5%; border-right: none;" type="button" onclick="" value="...">'+
            '<input type="text" style="width: 95%; border-left: none;" id="ubicacion-empresa" placeholder="Añadir ubicación de sus sucursal principal">'+
            '</div>'+
            '</div>'+
            '<div id="map" class="col"></div>'+
            '<div style="text-align: center;">'+
              '<button style="text-align: center;" type="button" class="btn btn-success">Agregar</button>'+
              '<button style="text-align: center;" type="button" class="btn btn-danger">Cancelar</button>'+
            '</div>'+
          '</div>'
          crearMapa();  
    });

    $("#newProm").on('click', function(){
      document.getElementById("menu").innerHTML = '<h1 style="text-align: center; margin-bottom: 40px;">Agregar Promocion</h1>'+
      '<select name="cars" class="custom-select custom-select mb-3">'+
        '<option selected="">Seleccione un articulo</option>'+
        '<option value="volvo">Computadora</option>'+
        '<option value="fiat">Equipo de Sonido</option>'+
        '<option value="audi">Refrigeradora</option>'+
      '</select>'+
      '<div style="margin-bottom: 20px; margin-bottom: 20px;" class="container-floud">'+
        '<section class="row">'+
      '<div class="input-group mb-3 col-md-4">'+
        '<div class="input-group-prepend">'+
          '<span class="input-group-text">%</span>'+
        '</div>'+
        '<input type="text" class="form-control" placeholder="Porcentaje de Descuento">'+
      '</div>'+
      '<div class="input-group mb-3 col-md-4">'+
        '<div class="input-group-prepend">'+
          '<span class="input-group-text">Precio</span>'+
        '</div>'+
        '<input type="text" class="form-control" placeholder="Precio Real">'+
      '</div>'+
      '<div class="input-group mb-3 col-md-4">'+
        '<div class="input-group-prepend">'+
          '<span class="input-group-text">Oferta</span>'+
        '</div>'+
        '<input type="text" class="form-control" placeholder="Precio de Oferta">'+
      '</div>'+
      '</section>'+
      '</div>'+
      '<h3 style="margin-bottom: 30px;">Fecha de efectividad de la Promocion</h3>'+
      '<div class="container-fluid">'+
        '<section class="row">'+
      '<div class="form-group row col-md-6">'+
        '<label for="example-date-input" class="col-1 col-form-label">Inicio:</label>'+
        '<div class="col-10">'+
          '<input class="form-control" type="date" value="2011-08-19" id="example-date-input">'+
        '</div>'+
      '</div>'+
      '<div class="form-group row col-md-6">'+
        '<label for="example-date-input" class="col-1 col-form-label">Fin:</label>'+
        '<div class="col-10">'+
          '<input class="form-control" type="date" value="2011-08-19" id="example-date-input">'+
        '</div>'+
      '</div>'+
      '</section>'+
      '</div>'+
      '<div class="row">'+
        '<div class="col input-group" style="margin-left: 25px; margin-right: 30px;">'+
        '<input style="width: 5%; border-right: none;" type="button" onclick="" value="...">'+
        '<input type="text" style="width: 95%; border-left: none;" id="ubicacion-empresa" placeholder="Añadir ubicación de sus sucursal principal">'+
        '</div>'+
        '</div>'+
        '<div id="map" class="col"></div>'+
        '<div style="text-align: center;">'+
          '<button style="text-align: center;" type="button" class="btn btn-success">Agregar</button>'+
          '<button style="text-align: center;" type="button" class="btn btn-danger">Cancelar</button>'+
        '</div>'
        crearMapa();
    });