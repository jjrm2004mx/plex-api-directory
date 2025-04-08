import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ApiList() {
  const [apis, setApis] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/apis", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setApis(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {apis.map((api) => (
        <Link to={`/apis/${api.id}`} key={api.id}>
          <div className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold">{api.name}</h3>
            <p className="text-sm text-gray-600">Version: {api.version}</p>
            <p className="text-sm text-blue-600">{api.status}</p>
          </div>
        </Link>
      ))}
    </div>
  );

}