<?php

class BaseAliadosMerge {
    
    /**
     * @type Reader
     * @type Level
     * @type Word 
     */
    
    protected $reader;
    protected $baseAliados;
    
    
    public function setReader($reader) {
        $this->reader = $reader;
    }
    
    public function setBaseMide($baseAliados) {
        $this->baseAliados = $baseAliados;
    }
    
    public function getArrayAllEntitiesToBuildJson() {
        $entitiesArray = $this->baseAliados->getArrayAllEntities();
        $dataArray = array();
        
        foreach ($entitiesArray as $i => $entities) {
            $dataArray[$i]['departamento'] = $entities['departamento'];
            $dataArray[$i]['pareja'] = $entities['pareja'];
            $dataArray[$i]['acomp'] = $entities['acomp'];
            $dataArray[$i]['direccion_acomp'] = $entities['direccion_acomp'];
            $dataArray[$i]['telefono_acomp'] = $entities['telefono_acomp'];
            $dataArray[$i]['rector_acomp'] = $entities['rector_acomp'];
            $dataArray[$i]['correo_acomp'] = $entities['correo_acomp'];
            $dataArray[$i]['mentor'] = $entities['mentor'];
            $dataArray[$i]['direccion_mentor'] = $entities['direccion_mentor'];
            $dataArray[$i]['telefono_mentor'] = $entities['telefono_mentor'];
            $dataArray[$i]['rector_mentor'] = $entities['rector_mentor'];
            $dataArray[$i]['correo_mentor'] = $entities['correo_mentor'];
        }
        
        return $dataArray;
    }
    
}
