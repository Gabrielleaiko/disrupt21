const express = require('express'); 
const { celebrate, Segments, Joi } = require('celebrate');

const ContainerController = require('./controllers/ContainerController');
const TrakingController = require('./controllers/TrakingController');

const routes = express.Router();

routes.get('/containers', ContainerController.index);

routes.post('/containers', celebrate({
    [Segments.BODY]: Joi.object().keys({
        typeCode: Joi.string().required(),
        origin: Joi.string().required(),
        approve_reference: Joi.string().required(),
        date_manufactored: Joi.date().required(),
        identification: Joi.string().required(),
        gross_max: Joi.number().required(),
        stacking_max: Joi.number().required(),
        racking_test: Joi.number().required(),
    })
}), ContainerController.create);

routes.get('/traking',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        container_id: Joi.string(),
        date_payload: Joi.string()
    })
}) , TrakingController.index);

routes.post('/traking', celebrate({
    [Segments.BODY]: Joi.object().keys({
        latitude: Joi.string().required(),
        longitude: Joi.string().required(),
        date_payload: Joi.string().required(),
        container_id: Joi.string().required()
    })
}), TrakingController.create);

module.exports = routes;