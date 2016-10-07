var app = "";

var markers = [];
var app = angular.module("aliadosApp", []);

app.controller('aliadosController', function($scope, $http) {
    $scope.entities = [];
    var obj = {content: null};

    $http.get('https://dl.dropboxusercontent.com/u/575652037/edu-unica/Base-jornada-unica.json').success(function(data) {
        obj.content = data;
        angular.forEach(obj.content, function(entities) {
            markers.push({
                "latLng": [parseFloat(entities.coordenadaX), parseFloat(entities.coordenadaY)],
                "name": entities.etc,
                "departamento": entities.departamento,
                "etc": entities.etc,
                "establecimientosEducativos": entities.establecimientosEducativos,
                "sedesEducativas": entities.sedesEducativas,
                "cupos": entities.cupos,
                "matriculas": entities.matriculas,
                "recursosPAE": entities.recursosPAE,
                "totalMatricula": entities.totalMatricula,
                "materialEntregado": entities.materialEntregado
            });
        });

        $('#map').vectorMap({
            map: 'co_mill',
            zoomMax: 5,
            markerStyle: {
                initial: {
                    fill: '#FFFFFF',
                    stroke: 'grey',
                    "fill-opacity": 1,
                    "stroke-width": 1,
                    "stroke-opacity": 1,
                    r: 5,
                    //image: 'img/map-marker.png'
                }
            },
            markers: markers,
            backgroundColor: '#F1EBE6',
            
            series: {
                regions: [{
                    values: {
                        "CO-SAP": '#FFCA8F',
                        "CO-LAG": '#FFCA8F',
                        "CO-MAG": '#8FC1D3',
                        "CO-ATL": '#9C96AF',
                        "CO-CES": '#CBDBA2',
                        "CO-BOL": '#FFCA8F',
                        "CO-SUC": '#CBDBA2',
                        "CO-COR": '#8FC1D3',
                        "CO-ANT": '#C59FBF',
                        "CO-SAN": '#9C96AF',
                        "CO-NSA": '#C59FBF',
                        "CO-CHO": '#FFCA8F',
                        "CO-ARA": '#8FC1D3',
                        "CO-VID": '#C59FBF',
                        "CO-GUV": '#FFCA8F',
                        "CO-CAS": '#CBDBA2',
                        "CO-MET": '#8FC1D3',
                        "CO-VAU": '#CBDBA2',
                        "CO-AMA": '#8FC1D3',
                        "CO-CAL": '#CBDBA2',
                        "CO-TOL": '#FFCA8F',
                        "CO-BOY": '#FFCA8F',
                        "CO-VAC": '#CBDBA2',
                        "CO-DC": '#9C96AF',
                        "CO-PUT": '#FFCA8F',
                        "CO-GUA": '#9C96AF',
                        "CO-HUI": '#CBDBA2',
                        "CO-NAR": '#9C96AF',
                        "CO-RIS": '#8FC1D3',
                        "CO-CUN": '#C59FBF',
                        "CO-CAU": '#8FC1D3',
                        "CO-CAQ": '#C59FBF',
                        "CO-QUI": '#9C96AF',
                    },
                 }],
             },
            
            onMarkerClick: function(event, index) {
                var content = "";

                content = "<p class='title-modal'><span></span>" + markers[index].etc + "</p>";
                
                content += "<table class='table-responsive' align='center' border='1'>";
                
                content += "<tr>";
                content += "<td>Establecimientos Educativos en Jornada \u00danica  (Fase 1-4)</td>";
                content += "<td>" + markers[index].establecimientosEducativos + "</td>";
                content += "<td>Sedes Educativas en Jornada \u00danica  (Fase 1-4)</td>";
                content += "<td>" + markers[index].sedesEducativas + "</td>";
                content += "</tr>";

                content += "<tr>";
                content += "<td>Cupos en Jornada \u00danica  (Fase 1-4)</td>";
                content += "<td>" + markers[index].cupos + "</td>";
                content += "<td>% Jornada \u00danica/Total Matrícula ETC</td>";
                content += "<td>" + markers[index].matriculas + "</td>";
                content += "</tr>";

                content += "<tr>";
                content += "<td>Recursos PAE JU</td>";
                content += "<td>" + markers[index].recursosPAE + "</td>";
                content += "<td>Material Singapur entregado</td>";
                content += "<td>" + markers[index].materialEntregado + "</td>";
                content += "</tr>";

                content += "</table>";

                $('#myModal').modal('show').find('.modal-body').html(content);
            },
        });

    });
});
