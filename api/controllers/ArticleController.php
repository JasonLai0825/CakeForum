<?php

namespace ApiService\controllers;

use ApiService\lib\HttpStatus;
use ApiService\models\Article;
class ArticleController extends Controller
{
    protected $tableName = 'article';

    /**
     * Get all articles
     */
    public function getAllArticles($perpage = 10) {
        try {
            $article = new Article();
            $articles = $article -> findAll();
            $result = json_decode(HttpStatus::getStatucCode(200), true);

            $result['articles'] = $articles;
            $result['perpage'] = $perpage;
            $result['page'] = ceil(count($articles) / $perpage);
            $result['total'] = count($articles);
            echo json_encode($result);
        }catch(Exception $e) {
            echo HttpStatus::getStatucCode(500);
        }
    }
}