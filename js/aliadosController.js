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
            
            content += "<div class='panel-group' id='accordion'>";
            content += "<div class='panel panel-default'>";
            

            $http.get('https://dl.dropboxusercontent.com/u/575652037/edu-aliados/service/Resources/Base-aliados.json').success(function(data) {
                obj.content = data;
                
                var i = 0;
                
                angular.forEach(obj.content, function(entities) {
                    
                    console.log(entities);
                    
                    if(entities.index == index){
                        
                        content += "<h4 class='panel-title'>";
                        
                        if(i == 0){
                            content += "<a data-toggle='collapse' data-parent='#accordion' href='#collapse'>";
                            content += "<div class='table-responsive'>";
                            content += "<table class='table-bordered table-map'>"
                            content += "<tr class='tr-header'><td>Colegio mentor</td><td>Municipio</td><td>Departamento</td><td>Nombre de instituci\u00f3n</td><td>Municipio</td><td>Departamento</td></tr>";
                            content += "</table>";
                            content += "</div>";
                            content += "</a>";
                        }
                        
                        content += "<a data-toggle='collapse' data-parent='#accordion' href='#collapse_"+i+"'>";
                        content += "<div class='table-responsive'>";
                        content += "<table class='table-bordered table-map'>"
                        content += "<tr><td>"+entities.mentor.toLowerCase()+"</td><td>"+entities.municipio_mentor.toLowerCase()+"</td><td>"+entities.departamento_mentor.toLowerCase()+"</td><td>"+entities.acomp.toLowerCase()+"</td><td>"+entities.municipio_acomp.toLowerCase()+"</td><td>"+entities.departamento_acomp.toLowerCase()+"</td></tr>"
                        content += "</table>";
                        content += "</div>";
                        content += "</a>";
                        content += "</h4>";
                        
                        if(i == 0)
                            content += "<div id='collapse_"+i+"' class='panel-collapse collapse in'>";
                        else
                            content += "<div id='collapse_"+i+"' class='panel-collapse collapse'>";
                        
                        content += "<div class='panel-body'>"
                        
                        content += "<div class='info-map'>";
                        content += "<div>"
                        content += "Acompa\u00f1ada: "+entities.acomp+"<br>";
                        content += "Direcci\u00f3n: "+entities.direccion_acomp+"<br>";
                        content += "Tel\u00e9fono: "+entities.telefono_acomp+"<br>";
                        content += "Rector: "+entities.rector_acomp+"<br>";
                        content += "Correo: "+entities.correo_acomp+"<br>";
                        content += "</div>";
                        
                        content += "<div class='info-map-mentor'>"
                        content += "Mentora: "+entities.mentor+"<br>";
                        content += "Direcci\u00f3n: "+entities.direccion_mentor+"<br>";
                        content += "Tel\u00e9fono: "+entities.telefono_mentor+"<br>";
                        content += "Rector: "+entities.rector_mentor+"<br>";
                        content += "Correo: "+entities.correo_mentor+"<br>";
                        content += "</div>";
                        content += "</div>"
                        
                        content += "</div>";
                        content += "</div>";
                        
                    }
                    
                    i++;
                    
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
                
                content += "</div>";
                content += "</div>";
                $('#myModal').modal('show').find('.modal-body').html(content);
                
            });
        }

    });

});
