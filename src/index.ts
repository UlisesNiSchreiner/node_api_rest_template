import { createServer } from "./server";

const PORT = Number(process.env.PORT ?? 3000);

async function bootstrap() {
  const app = await createServer();
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`API listening on port ${PORT}`);
  });
}

void bootstrap();