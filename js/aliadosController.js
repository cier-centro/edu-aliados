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
                    "CO-SAP": (validateIsExistsInfo("CO-SAP") == 0)?'#FFFFFF':'#FFCA8F',
                    "CO-LAG": (validateIsExistsInfo("CO-LAG") == 0)?'#FFFFFF':'#FFCA8F',
                    "CO-MAG": (validateIsExistsInfo("CO-MAG") == 0)?'#FFFFFF':'#8FC1D3',
                    "CO-ATL": (validateIsExistsInfo("CO-ATL") == 0)?'#FFFFFF':'#9C96AF',
                    "CO-CES": (validateIsExistsInfo("CO-CES") == 0)?'#FFFFFF':'#CBDBA2',
                    "CO-BOL": (validateIsExistsInfo("CO-BOL") == 0)?'#FFFFFF':'#FFCA8F',
                    "CO-SUC": (validateIsExistsInfo("CO-SUC") == 0)?'#FFFFFF':'#CBDBA2',
                    "CO-COR": (validateIsExistsInfo("CO-COR") == 0)?'#FFFFFF':'#8FC1D3',
                    "CO-ANT": (validateIsExistsInfo("CO-ANT") == 0)?'#FFFFFF':'#C59FBF',
                    "CO-SAN": (validateIsExistsInfo("CO-SAN") == 0)?'#FFFFFF':'#9C96AF',
                    "CO-NSA": (validateIsExistsInfo("CO-NSA") == 0)?'#FFFFFF':'#C59FBF',
                    "CO-CHO": (validateIsExistsInfo("CO-CHO") == 0)?'#FFFFFF':'#FFCA8F',
                    "CO-ARA": (validateIsExistsInfo("CO-ARA") == 0)?'#FFFFFF':'#8FC1D3',
                    "CO-VID": (validateIsExistsInfo("CO-VID") == 0)?'#FFFFFF':'#C59FBF',
                    "CO-GUV": (validateIsExistsInfo("CO-GUV") == 0)?'#FFFFFF':'#FFCA8F',
                    "CO-CAS": (validateIsExistsInfo("CO-CAS") == 0)?'#FFFFFF':'#CBDBA2',
                    "CO-MET": (validateIsExistsInfo("CO-MET") == 0)?'#FFFFFF':'#8FC1D3',
                    "CO-VAU": (validateIsExistsInfo("CO-VAU") == 0)?'#FFFFFF':'#CBDBA2',
                    "CO-AMA": (validateIsExistsInfo("CO-AMA") == 0)?'#FFFFFF':'#8FC1D3',
                    "CO-CAL": (validateIsExistsInfo("CO-CAL") == 0)?'#FFFFFF':'#CBDBA2',
                    "CO-TOL": (validateIsExistsInfo("CO-TOL") == 0)?'#FFFFFF':'#FFCA8F',
                    "CO-BOY": (validateIsExistsInfo("CO-BOY") == 0)?'#FFFFFF':'#FFCA8F',
                    "CO-VAC": (validateIsExistsInfo("CO-VAC") == 0)?'#FFFFFF':'#CBDBA2',
                    "CO-DC": (validateIsExistsInfo("CO-DC") == 0)?'#FFFFFF':'#9C96AF',
                    "CO-PUT": (validateIsExistsInfo("CO-PUT") == 0)?'#FFFFFF':'#FFCA8F',
                    "CO-GUA": (validateIsExistsInfo("CO-GUA") == 0)?'#FFFFFF':'#9C96AF',
                    "CO-HUI": (validateIsExistsInfo("CO-HUI") == 0)?'#FFFFFF':'#CBDBA2',
                    "CO-NAR": (validateIsExistsInfo("CO-NAR") == 0)?'#FFFFFF':'#9C96AF',
                    "CO-RIS": (validateIsExistsInfo("CO-RIS") == 0)?'#FFFFFF':'#8FC1D3',
                    "CO-CUN": (validateIsExistsInfo("CO-CUN") == 0)?'#FFFFFF':'#C59FBF',
                    "CO-CAU": (validateIsExistsInfo("CO-CAU") == 0)?'#FFFFFF':'#8FC1D3',
                    "CO-CAQ": (validateIsExistsInfo("CO-CAQ") == 0)?'#FFFFFF':'#C59FBF',
                    "CO-QUI": (validateIsExistsInfo("CO-QUI") == 0)?'#FFFFFF':'#9C96AF',
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
                var ban = 0;
                
                angular.forEach(obj.content, function(entities) {
                    
                    console.log(entities);
                    
                    if(entities.index == index){
                        ban = 1;
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
                    
                });
                
                content += "</div>";
                content += "</div>";
                
                if(ban == 1)
                    $('#myModal').modal('show').find('.modal-body').html(content);
                
            });
        }

    });
    
    
    
    function validateIsExistsInfo(index){
       var ban = 0; 
       $.ajax({
            url : 'https://dl.dropboxusercontent.com/u/575652037/edu-aliados/service/Resources/Base-aliados.json',
            dataType : 'json',
            async : false,
            success : function(data) {
               $.each(data, function(i, item) {
                    if(item.index == index)
                        ban = 1;
               });
            },
        }) ;
        
        return ban;
    }

});
