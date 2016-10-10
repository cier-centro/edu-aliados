var app = "";

var arrayEntities = [];
var app = angular.module("aliadosApp", []);

app.controller('aliadosController', function($scope, $http) {
    
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

        onRegionClick: function (event, index){
            $scope.entities = [];
            var obj = {content: null};
            var content = "";
            content += "<table class='table-responsive' align='center' border='1'>";

            $http.get('https://dl.dropboxusercontent.com/u/575652037/edu-aliados/service/Resources/Base-aliados.json').success(function(data) {
                obj.content = data;
                angular.forEach(obj.content, function(entities) {
                    
                    console.log(entities);
                    
                    if(entities.index == index){
                        content += "<tr>";
                        content += "<td>Establecimientos Educativos en Jornada \u00danica  (Fase 1-4)</td>";
                        content += "<td>" + entities.departamento + "</td>";
                        content += "<td>Sedes Educativas en Jornada \u00danica  (Fase 1-4)</td>";
                        content += "<td>" + entities.region + "</td>";
                        content += "</tr>";
                    }
                    
                    console.log(entities.index+' = '+index);
                    
                    /*arrayEntities.push({
                        "departamento": entities.departamento,
                        "region": entities.region,
                        "pareja": entities.pareja,
                        "acomp": entities.acomp,
                        "direccion_acomp": entities.direccion_acomp,
                        "telefono_acomp": entities.telefono_acomp,
                        "rector_acomp": entities.rector_acomp,
                        "correo_acomp": entities.correo_acomp,
                        "mentor": entities.mentor,
                        "direccion_mentor": entities.direccion_mentor,
                        "telefono_mentor": entities.telefono_mentor,
                        "rector_mentor": entities.rector_mentor,
                        "correo_mentor": entities.correo_mentor,
                        "index": entities.index
                    });*/
                    
                });
                
                content += "</table>";
                $('#myModal').modal('show').find('.modal-body').html(content);
                
            });
        }

    });

});
