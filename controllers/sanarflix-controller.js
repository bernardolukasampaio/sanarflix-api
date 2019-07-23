const express = require('express');


const sanarFlixService = require('../services/sanarflix-services');

const criarClienteMundipagg = async (req, res, next) => {
    await sanarFlixService.criarClienteMundipagg(req,res);
};

const obterClienteMundipagg = async (req, res, next) => {
    await sanarFlixService.obterClienteMundipagg(req,res);
};

const listarClientesMundipagg = async (req, res, next) => {
    await sanarFlixService.listarClientesMundipagg(res);
};

const criarCartaoclienteMundipagg = async (req, res, next) => {
    await sanarFlixService.criarCartaoclienteMundipagg(req,res);
};

const obterCartaoclienteMundipagg = async (req, res, next) => {
    await sanarFlixService.obterCartaoclienteMundipagg(req, res);
};

const criarPlanoMundipagg = async (req, res, next) => {
    sanarFlixService.criarPlanoMundipagg(req, res);
};

const criarAssinaturaMundipagg = async (req, res, next) => {
    sanarFlixService.criarAssinaturaMundipagg(req, res);
};

//
module.exports = {
    criarClienteMundipagg, obterClienteMundipagg, listarClientesMundipagg,
    criarCartaoclienteMundipagg, obterCartaoclienteMundipagg, criarPlanoMundipagg,
    criarAssinaturaMundipagg
};