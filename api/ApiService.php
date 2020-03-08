<?php

namespace ApiService;

use ApiService\lib\Router;
use ApiService\lib\HttpStatus;
class ApiService
{
    function __construct() {
        // parse url
        $routeInfo = Router::parseUrl();
        $controller = "ApiService\\controllers\\" . $routeInfo['controller'] . "Controller";
        $action = $routeInfo['action'];

        if(empty($controller) || empty($action)) {
            echo HttpStatus::getStatucCode(400);
        }else {
            (new $controller()) -> $action();
        }
    }
}