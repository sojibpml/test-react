import { useState } from "react";

export default function Page() {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    if (!url) {
      setMessage("Please enter URL");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("http://localhost:5000/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Download Ready: " + data.title);

        window.open(data.downloadUrl, "_blank");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Server error / Backend not running");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>YouTube Downloader</h1>

      <input
        type="text"
        placeholder="Paste YouTube URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Download"}
      </button>

      <p>{message}</p>
    </div>
  );
}
