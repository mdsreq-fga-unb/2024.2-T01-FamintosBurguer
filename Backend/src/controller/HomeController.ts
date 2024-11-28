import { Request, Response } from 'express';

export class HomeController {
  /**
   * @swagger
   * /:
   *   get:
   *     summary: Hello
   *     tags: [Home]
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     responses:
   *       '200':
   *           description: 'requisição executada com sucesso'
   *           content:
   *             application/json:
   *               schema:
   *                 type: object
   *                 properties:
   *                   status:
   *                     type: boolean
   *                   data:
   *                     type: object
   *                     description: 'objeto json de retorno'
   */
  hello(_req: Request, res: Response) {
    return res.status(200).send('Hello');
  }
}
