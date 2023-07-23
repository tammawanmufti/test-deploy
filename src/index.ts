import express from "express";

async function main() {
  const app = express();

  app.get("/", (req, res) => res.status(200).send({ health: "ok" }));

  app.listen(4500, () => {
    console.info("App running in port 4500");
  });
}

main();
