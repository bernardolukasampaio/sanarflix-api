const express = require('express');
const sanarflixDb = require('../db/sanarflix-db');
const fs = require('fs');
const request = require("request");

const criarClienteMundipagg = async (req,res) => {
    json.name = req.params.nome;
    
    var options = {
        method: 'POST',
        uri: 'https://api.mundipagg.com/core/v1/customers',
        headers: {
            'Authorization': 'Basic ' + new Buffer("sk_test_RYwm6wBcMjt387nb:").toString('base64'),
            'Content-Type': 'application/json'
        },
        json: json
    };
    request(options, function (error, response, body) {
        sanarflixDb.criarClienteMundipagg(response.body);
        res.send(response.body);
//        console.log(response.body);
    });
};

const obterClienteMundipagg = async (req,res) => {
    var options = {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + new Buffer("sk_test_RYwm6wBcMjt387nb:").toString('base64'),
            'Content-Type': 'application/json'
        },
        url: 'https://api.mundipagg.com/core/v1/customers/'+req.params.id
    };
    request(options, function (error, response, body) {
        res.send(response.body);
    });
};

const listarClientesMundipagg = async (res) => {
    var options = {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + new Buffer("sk_test_RYwm6wBcMjt387nb:").toString('base64'),
            'Content-Type': 'application/json'
        },
        url: 'https://api.mundipagg.com/core/v1/customers?page=1&size=50'
    };
    request(options, function (error, response, body) {
        res.send(response.body);
    });
};

const criarCartaoclienteMundipagg = async (req,res, idCliente) => {
    json_card.holder_name = req.params.nome;
    var options = {
        method: 'POST',
        uri: 'https://api.mundipagg.com/core/v1/customers/' + req.params.id + '/cards',
        headers: {
            'Authorization': 'Basic ' + new Buffer("sk_test_RYwm6wBcMjt387nb:").toString('base64'),
            'Content-Type': 'application/json',
            'customer_id': req.params.id
        },
        json: json_card
    };
    request(options, function (error, response, body) {
        sanarflixDb.criarCartaoclienteMundipagg(response.body, req.params.id);
        res.send(response.body);
    });
};

const obterCartaoclienteMundipagg = async (req, res) => {
    sanarflixDb.obterIdCartao(req.params.id, function (result, err) {
        res.send(result);
        return;
        var options = {
            method: 'POST',
            uri: 'https://api.mundipagg.com/core/v1/customers/' + id_cliente + '/cards/' + id_cartao,
            headers: {
                'Authorization': 'Basic ' + new Buffer("sk_test_RYwm6wBcMjt387nb:").toString('base64'),
                'Content-Type': 'application/json'
            },
            json: json_card
        };
        request(options, function (error, response, body) {
            res.send(response.body);
            //        sanarflixDb.criarCartaoclienteMundipagg(response.body, );
            //        res.send('Cartão cadastrado com sucesso!');
        });
    });

};

const criarPlanoMundipagg = async (req, res) => {
    json_plano.name = req.params.nome;
    json_plano.interval_count = req.params.intervalo;
    json_plano.interval_count = req.params.intervalo;
    json_plano.minimum_price = req.params.preco;

    var options = {
        method: 'POST',
        uri: 'https://api.mundipagg.com/core/v1/plans',
        headers: {
            'Authorization': 'Basic ' + new Buffer("sk_test_RYwm6wBcMjt387nb:").toString('base64'),
            'Content-Type': 'application/json'
        },
        json: json_plano
    };
    request(options, function (error, response, body) {
        sanarflixDb.criarPlanoMundipagg(response.body);
        res.send(response.body);
    });
};

const criarAssinaturaMundipagg = async (req, res) => {

    json_assinatura.plan_id = req.params.idPlano;
    json_assinatura.customer_id = req.params.idCliente;

    var options = {
        method: 'POST',
        uri: 'https://api.mundipagg.com/core/v1/subscriptions',
        headers: {
            'Authorization': 'Basic ' + new Buffer("sk_test_RYwm6wBcMjt387nb:").toString('base64'),
            'Content-Type': 'application/json'
        },
        json: json_assinatura
    };
    request(options, function (error, response, body) {
        sanarflixDb.criarAssinaturaMundipagg(response.body);
        res.send(response.body);
    });
};

var json = {
    "name": "Jannifer Dayane",
    "email": "jennifer@dayanne.com",
    "code": "MY_CUSTOMER_004",
    "document": "982155321",
    "type": "individual",
    "gender": "female",
    "address": {
        "line_1": "222, Av. General Justo, Centro",
        "line_2": "11º andar",
        "zip_code": "20021130",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "country": "BR"
    },
    "birthdate": "08/09/2000",
    "phones": {
        "home_phone": {
            "country_code": "55",
            "area_code": "21",
            "number": "000000201"
        },
        "mobile_phone": {
            "country_code": "55",
            "area_code": "21",
            "number": "000000201"
        }
    },
    "metadata": {
        "company": "Avengers 2"
    }
};

var json_card = {
    "number": "4000000000000010",
    "holder_name": "Jennifer Dayane",
    "holder_document": "982155321",
    "exp_month": 1,
    "exp_year": 21,
    "cvv": "451",
    "brand": "Mastercard",
    "private_label": false,
    "billing_address": {
        "line_1": "375, Av. General Osorio, Centro",
        "line_2": "7º Andar",
        "zip_code": "220000111",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "country": "BR"
    },
    "options": {
        "verify_card": true
    }
};

var json_plano = {
    "name": "Plano Gold",
    "currency": "BRL",
    "interval": "month",
    "interval_count": 3,
    "billing_type": "prepaid",
    "minimum_price": 2450,
    "installments": [3],
    "payment_methods": ["credit_card", "boleto"],
    "items": [
        {
            "name": "Matrícula",
            "cycles": 1,
            "quantity": 1,
            "pricing_scheme": {
                "price": 2450
            }
        }
    ],
    "metadata": {
        "id": "my_plan_id"
    }
};

var json_assinatura = {
    "plan_id": "plan_21r4CTG0ux77Qv13",
    "payment_method": "credit_card",
    "gateway_affiliation_id": "C56A4180-65AA-42EC-A945-5FD21DEC0538",
    "boleto_due_days": 5,
    "customer_id": "",
    "card": {
        "number": "4000000000000010",
        "holder_name": "Jennifer Dayane",
        "holder_document": "982155321",
        "exp_month": 1,
        "exp_year": 21,
        "cvv": "451",
        "brand": "Mastercard",
        "billing_address": {
            "line_1": "375, Av. General Osorio, Centro",
            "line_2": "7º Andar",
            "zip_code": "220000111",
            "city": "Rio de Janeiro",
            "state": "RJ",
            "country": "BR"
        }
    },
    "metadata": {
        "id": "my_subscription_id"
    }
};


module.exports = {
    criarClienteMundipagg, obterClienteMundipagg, listarClientesMundipagg,
    criarCartaoclienteMundipagg, obterCartaoclienteMundipagg, criarPlanoMundipagg,
    criarAssinaturaMundipagg
};