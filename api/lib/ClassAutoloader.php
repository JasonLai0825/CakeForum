<?php

include_once __DIR__ . '/../config/lib.paths.php';

function autoload($className) {
    global $LIB_PATHS;
    if(array_key_exists($className, $LIB_PATHS)) {
        include_once $LIB_PATHS[$className];
    }else {
        echo "$className not found.";
    }
}

spl_autoload_register('autoload');