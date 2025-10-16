'use strict';

/**
 * googlesheet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::googlesheet.googlesheet');
