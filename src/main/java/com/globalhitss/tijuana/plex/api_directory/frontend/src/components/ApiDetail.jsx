import axios from "axios";
import { TriangleAlertIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

function isVersionGreater(v1, v2) {
  const a = v1.split('.').map(Number);
  const b = v2.split('.').map(Number);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if ((a[i] || 0) > (b[i] || 0)) return true;
    if ((a[i] || 0) < (b[i] || 0)) return false;
  }
  return false;
}


export default function ApiDetail({ apiId, onClose }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [error, setError] = useState(null);
  const [versions, setVersions] = useState([]);
  const [activeTab, setActiveTab] = useState(0); 
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get(`${apiUrl}/api-versions`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setVersions(res.data))
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setError(t('sessionExpired') || "Sesión expirada. Por favor, vuelve a iniciar sesión.");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          setError(t('unexpectedError') || "Error inesperado");
        }
      });
  }, [apiUrl, t, navigate]);

  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (versions.length === 0) {
    return <div className="p-6">{t('noVersions') || "No hay versiones disponibles."}</div>;
  }

  return (
    <div className="p-6 w-full max-w-4xl mx-auto bg-white rounded-xl shadow relative">
      {onClose && (
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label={t('close') || "Cerrar"}
        >
          &times;
        </button>
      )}
      <Tabs value={String(activeTab)}>
        <TabsList>
          {versions.map((version, idx) => (
            <TabsTrigger
              key={idx}
              value={String(idx)}
              activeValue={String(activeTab)}
              onClick={() => setActiveTab(idx)}
            >
              {version.thisVersion}
            </TabsTrigger>
          ))}
        </TabsList>

        {versions.map((version, idx) => (
          <TabsContent
            key={idx}
            value={String(idx)}
            activeValue={String(activeTab)}
            className="flex flex-col gap-4 mt-4"
          >
            {/* Título principal: fuera del Card de descripción */}
            <h2 className="text-2xl font-bold">{version.name}</h2>

            {isVersionGreater(version.thisVersion, version.stableVersion) && (
              <div className="flex items-center gap-2 bg-orange-50 border border-orange-300 text-sm text-gray-900 px-4 py-3 rounded-md">
                <TriangleAlertIcon className="text-orange-500 w-5 h-5" />
                <span>
                  <strong className="text-blue-900">Preview version</strong>{' '}
                  This is a new version of this asset.
                </span>
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-4">
              {/* Sección izquierda: Overview + Version History */}
              <div className="flex-1">
                <Card className="h-full">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{t('overview') || "Overview"}</h3>
                    <p className="text-sm text-gray-700">{version.overview}</p>
                    <div>
                      <h4 className="font-semibold mt-4">{t('versionHistory') || "Version history"}</h4>
                      <p className="text-sm text-gray-600 whitespace-pre-wrap mt-1">{version.versionHistory}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recuadro de información lateral */}
              <div className="w-full lg:w-1/3">
                <Card className="h-full">
                  <CardContent className="p-6 space-y-4 text-sm text-gray-800">
                    {[
                      ['API NO.:', version.apiNumber || "TMF646"],
                      ['STABLE VERSION:', version.stableVersion || "v4.0"],
                      ['THIS VERSION:', version.thisVersion || "v4.0"],
                      ['TYPES:', version.type || "RESTful"],
                      ['DOMAIN:', version.domain || "Customer"],
                      ['IPR MODE:', version.iprMode || "Apache 2.0 unless stated"],
                      ['RELEASE DATE:', version.releaseDate || "01 Jul 2021"],
                    ].map(([label, value], i) => (
                      <div key={i} className="flex justify-between border-b pb-1">
                        <span className="font-medium text-gray-600">{label}</span>
                        <span className="text-right font-semibold text-indigo-700">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}