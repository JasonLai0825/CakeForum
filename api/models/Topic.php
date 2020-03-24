<?php

namespace ApiService\models;

class Topic extends Database
{
    protected $tableName = 'topic';

    function __construct() {
        parent::__construct();
    }

    /**
     * get hottest topics
     * 
     * @return array hottest topics
     */
    public function getHotTopics() {
        $sth = $this->db -> prepare("SELECT * FROM {$this->tableName} WHERE `status` = 1 ORDER BY `vuew_times` DESC LIMIT 5");
        return $sth -> execute() -> fetchAll(PDO::FETCH_ASSOC);
    }
}