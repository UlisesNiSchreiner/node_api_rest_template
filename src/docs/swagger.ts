import swaggerJSDoc, { type Options } from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "UNS Node REST API Template",
    version: "1.0.0",
    description: "Template de API REST en Node.js + TypeScript (controllers → services → repositories)",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local dev",
    },
  ],
  paths: {
    "/health": {
      get: {
        tags: ["Health"],
        summary: "Health check",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: { type: "string", example: "ok" },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/users": {
      get: {
        tags: ["Users"],
        summary: "Obtener todos los usuarios",
        responses: {
          200: {
            description: "Lista de usuarios",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string", example: "1" },
                      email: { type: "string", example: "user@example.com" },
                      name: { type: "string", example: "User Name" },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const options: Options = {
  swaggerDefinition,
  // más adelante podés agregar comentarios JSDoc en controllers/routes
  apis: [
    "./src/routes/*.ts",
    "./src/controllers/*.ts",
  ],
};

export const swaggerSpec = swaggerJSDoc(options);
