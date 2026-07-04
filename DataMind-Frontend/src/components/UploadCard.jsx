import "./UploadCard.css";
import { FaUpload } from "react-icons/fa";

export default function UploadCard({
  file,
  setFile,
  loading,
  setLoading,
  setSummary,
  setRunId,
  API_BASE,
}) {
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      console.log("Uploading to:", `${API_BASE}/run-eda`);

      const res = await fetch(`${API_BASE}/run-eda`, {
        method: "POST",
        body: formData,
      });

      const responseText = await res.text();
      let data = null;

      if (responseText) {
        try {
          data = JSON.parse(responseText);
        } catch {
          console.error("Non-JSON response from server:", responseText);
        }
      }

      if (!res.ok) {
        const message =
          data?.detail ||
          data?.message ||
          responseText ||
          `EDA failed with status ${res.status}`;
        throw new Error(message);
      }

      // IMPORTANT: summary is markdown
      setSummary(data?.summary || "");
      setRunId(data?.run_id || "");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Upload CSV & Run EDA</h2>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="primary" onClick={handleUpload} disabled={loading}>
        {loading ? "Running EDA..." : "Run EDA"}
      </button>
    </div>
  );
}
