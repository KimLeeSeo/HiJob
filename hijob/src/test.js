const express = require("express");
const router = express.Router();
const request = require("request");
const converter = require("xml-js");

let url = "http://openapi.seoul.go.kr:8088/4d635141516a656f3131337278414b77/xml/GlobalJobSearch/1/5/";

router.get("/",(req,res)=>{
    request(
        {
            url:url,
            method:"GET",
        },
        (error,resonse,body)=>{
            const xmlToJson=converter.xml2json(body);
            res.send(xmlToJson);
        }
    );
});

module.exports = router;