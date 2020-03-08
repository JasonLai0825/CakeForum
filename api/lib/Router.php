<?php

namespace ApiService\lib;
class Router
{
    /**
     * 
     */
    public static function parseUrl() {
        global $ROUTES;
        $uri = $_SERVER['REQUEST_URI'];
        if(DEBUG_MODE) {
            $uri = str_replace(DEV_PREFIX, '', $uri);
        }
        return array(
            'controller' => ($ROUTES[$uri] ? $ROUTES[$uri][0] : ''),
            'action' => ($ROUTES[$uri] ? $ROUTES[$uri][1] : '')
        );
    }
}