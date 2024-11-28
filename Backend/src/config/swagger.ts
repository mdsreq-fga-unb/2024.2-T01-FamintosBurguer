import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerConfig: swaggerJSDoc.OAS3Options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Famintos API',
      description: 'Documentação da API do Famintos.',
      version: '1.0.0'
    },
    host: 'localhost:4444',
    tags: [],
    externalDocs: {
      description: 'View swagger.json',
      url: '../swagger.json'
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          in: 'header',
          type: 'http',
          scheme: 'bearer'
        }
      }
    }
  },
  apis: ['src/controller/*.ts', 'controller/*.js']
};
