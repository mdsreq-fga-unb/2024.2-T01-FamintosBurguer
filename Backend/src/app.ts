import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { AppDataSource } from './config/database'; // Ajuste para PostgreSQL
import { swaggerConfig } from './config/swagger';
import routes from './routes';

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Database initialized with PostgreSQL!');
  })
  .catch((err) => {
    console.error('❌ Database initialization error:', err);
  });

const app = express();

// Middleware configuration
app.use(express.json());
app.use(cors({ origin: true }));

// Routes
app.use(routes);

// Swagger setup
const swaggerSpec = swaggerJSDoc(swaggerConfig);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.get('/swagger.json', (_req, res) => res.send(swaggerSpec));

console.log('📄 Swagger documentation available at /swagger');

// Start the server
const PORT = process.env.SERVER_PORT || 4444;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
