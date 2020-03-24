<?php

namespace ApiService\models;

class Article extends Database
{
    protected $tableName = 'article';

    function __construct() {
        parent::__construct();
    }

    /**
     * get hottest articles.
     * 
     * @return array hottest articles
     */
    public function getHotArticles() {
        $sth = $this->db -> prepare("SELECT * FROM {$this->tableName} WHERE `status` = 1 ORDER BY `like_times` DESC, `view_times` DESC");
        return $sth -> execute() -> fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * get newest articles.
     * 
     * @return array newest articles
     */
    public function getNewestArticles() {
        $sth = $this->db -> prepare("SELECT * FROM {$this->tableName} WHERE `status` = 1 ORDER BY `create_date` DESC");
        return $sth -> execute() -> fetchAll(PDO::FETCH_ASSOC);
    }
}