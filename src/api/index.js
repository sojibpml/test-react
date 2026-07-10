import express from "express";
import cors from "cors";
import ytdl from "@distube/ytdl-core";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/download", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.json({
        success: false,
        message: "URL missing",
      });
    }

    const info = await ytdl.getInfo(url);

    const format = ytdl.chooseFormat(info.formats, {
      quality: "18",
    });

    res.json({
      success: true,
      title: info.videoDetails.title,
      downloadUrl: format.url,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: "Download failed",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
