const Joi = require('joi');

function createUser(user) {
    const schema_user = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    });

    return schema_user.validate(user);
}

function updateUser(user) {
    const schema_user = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required()
    });

    return schema_user.validate(user);
}

module.exports = {
    createUser,
    updateUser
}