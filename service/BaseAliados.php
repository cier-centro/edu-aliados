<?php

require_once 'Reader.php';

class BaseAliados {

    protected $reader;

    public function setReader($reader) {
        $this->reader = $reader;
    }

    public function getArrayAllUniversitiesByCodeIes($codeIes) {
        $sheet = $this->reader->getSheetObject();
        $entitiesArray = array();

        for ($file = 2; $file <= $sheet->getHighestRow(); $file++) {
            $cellCodeIesValue = $sheet->getCellByColumnAndRow(1, $file)->getValue();

            if ($codeIes == $cellCodeIesValue) {
                $entitiesArray[] = $sheet->getCellByColumnAndRow(0, $file)->getValue();
                $entitiesArray[] = $sheet->getCellByColumnAndRow(1, $file)->getValue();
                $entitiesArray[] = $sheet->getCellByColumnAndRow(2, $file)->getValue();
                $entitiesArray[] = $sheet->getCellByColumnAndRow(3, $file)->getValue();
                $entitiesArray[] = $sheet->getCellByColumnAndRow(4, $file)->getValue();
                $entitiesArray[] = $sheet->getCellByColumnAndRow(5, $file)->getValue();
            }
        }

        return $entitiesArray;
    }

    public function getArrayAllEntities() {
        $sheet = $this->reader->getSheetObject();
        $entitiesArray = array();

        $i = 0;

        for ($file = 2; $file <= $sheet->getHighestRow(); $file++) {

            $departamento = trim($sheet->getCellByColumnAndRow(8, $file)->getValue());
            $pareja = trim($sheet->getCellByColumnAndRow(1, $file)->getValue());
            
            $acomp = trim($sheet->getCellByColumnAndRow(9, $file)->getValue());
            $direccion_acomp = trim($sheet->getCellByColumnAndRow(10, $file)->getValue());
            $telefono_acomp = trim($sheet->getCellByColumnAndRow(11, $file)->getValue());
            $rector_acomp = trim($sheet->getCellByColumnAndRow(12, $file)->getValue());
            $correo_acomp = trim($sheet->getCellByColumnAndRow(13, $file)->getValue());
            $municipio_acomp = trim($sheet->getCellByColumnAndRow(14, $file)->getValue());
            $departamento_acomp = trim($sheet->getCellByColumnAndRow(15, $file)->getValue());
            
            $mentor = trim($sheet->getCellByColumnAndRow(2, $file)->getValue());
            $direccion_mentor = trim($sheet->getCellByColumnAndRow(3, $file)->getValue());
            $telefono_mentor = trim($sheet->getCellByColumnAndRow(4, $file)->getValue());
            $rector_mentor = trim($sheet->getCellByColumnAndRow(5, $file)->getValue());
            $correo_mentor = trim($sheet->getCellByColumnAndRow(6, $file)->getValue());
            $municipio_mentor = trim($sheet->getCellByColumnAndRow(7, $file)->getValue());
            $departamento_mentor = trim($sheet->getCellByColumnAndRow(8, $file)->getValue());
            
            $index = trim($sheet->getCellByColumnAndRow(16, $file)->getValue());
            
            $entitiesArray[$i]['departamento'] = $departamento;
            $entitiesArray[$i]['region'] = $region;
            $entitiesArray[$i]['pareja'] = $pareja;
            $entitiesArray[$i]['acomp'] = $acomp;
            $entitiesArray[$i]['direccion_acomp'] = $direccion_acomp;
            $entitiesArray[$i]['telefono_acomp'] = $telefono_acomp;
            $entitiesArray[$i]['rector_acomp'] = $rector_acomp;
            $entitiesArray[$i]['correo_acomp'] = $correo_acomp;
            $entitiesArray[$i]['municipio_acomp'] = $municipio_acomp;
            $entitiesArray[$i]['departamento_acomp'] = $departamento_acomp;
            
            $entitiesArray[$i]['mentor'] = $mentor;
            $entitiesArray[$i]['direccion_mentor'] = $direccion_mentor;
            $entitiesArray[$i]['telefono_mentor'] = $telefono_mentor;
            $entitiesArray[$i]['rector_mentor'] = $rector_mentor;
            $entitiesArray[$i]['correo_mentor'] = $correo_mentor;
            $entitiesArray[$i]['municipio_mentor'] = $municipio_mentor;
            $entitiesArray[$i]['departamento_mentor'] = $departamento_mentor;
            
            $entitiesArray[$i]['index'] = $index;
            
            $i++;
        }

        return $entitiesArray;
    }

}
