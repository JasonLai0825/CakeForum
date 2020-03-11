<?php

namespace ApiService\models;

use \PDO,\PDOStatement,\PDOException;
class Database
{
    private $dsn = 'mysql:host=127.0.0.1;dbname=cakeforum;charset=utf8';
    private $user = 'root';
    private $pass = 'laishaoping0825';
    private $db;

    protected $tableName;

    function __construct() {
        try {
            $this->db = new PDO($this->dsn, $this->user, $this->pass);
        }catch(PDOException $e) {
            die("Connection failed: " . $e -> getMessage());
        }
    }

    /**
     * get all datas from table
     * 
     * @return array datas
     */
    function findAll() {
        $sth = $this->db -> prepare("SELECT * FROM {$this->tableName}");
        $sth -> execute();
        return $sth -> fetchAll(PDO::FETCH_ASSOC);
    }
}