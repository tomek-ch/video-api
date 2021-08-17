import "dotenv/config";
import express from "express";
import getVideo from "./utils/getVideo";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());

app.get("/video", async (req, res) => {
  if (typeof req.query.q === "string") {
    const result = await getVideo(req.query.q);
    return res.json(result);
  }
  return res.json(null);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App running on port ${port}`));
