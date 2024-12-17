const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation for the API'
    },
    servers: [
      {
        url: 'http://localhost:3001/api',
        description: 'Development server'
      }
    ]
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);

function swaggerDocs(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = swaggerDocs;