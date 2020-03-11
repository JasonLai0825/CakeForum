<?php

namespace ApiService\models;

class Article extends Database
{
    protected $tableName = 'article';

    function __construct() {
        parent::__construct();
    }
}