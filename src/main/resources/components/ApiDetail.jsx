import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ApiDetail() {
  const { id } = useParams();
  const [api, setApi] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/apis/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setApi(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!api) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-2">{api.name}</h2>
      <p className="text-sm text-gray-500 mb-2">Version: {api.version} - Status: {api.status}</p>
      <p className="mb-4">{api.description}</p>
      <div className="border-t pt-4">
        <h3 className="font-semibold mb-2">Detalles</h3>
        <p>{api.detail}</p>
      </div>
    </div>
    );
  
  }