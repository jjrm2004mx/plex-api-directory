import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ApiDetail from "./ApiDetail";



export default function ApiList() {
  
 
  const [apis, setApis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [error, setError] = useState(null);

   // Primero filtra los APIs
  const filteredApis = apis.filter(
    (api) =>
      api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      api.description.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const presentLetters = new Set(filteredApis.map(api => api.name[0].toUpperCase()));

   const [showModal, setShowModal] = useState(false);
  const [selectedApi, setSelectedApi] = useState(null);


  const letters = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
  //const [selectedLetter, setSelectedLetter] = useState("#");

  const onSelectLetter = (letter) => {
  const anchor = document.getElementById(`anchor-${letter}`);


 

  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const onSelectTopPage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

useEffect(() => {
  axios
    .get(`${apiUrl}/apis`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      setApis(res.data);
      setLoading(false);
    })
    .catch((err) => {
      if (err.response && err.response.status === 401) {
        setError(t('sessionExpired') || "Sesión expirada. Por favor, vuelve a iniciar sesión.");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError(t('unexpectedError') || "Error inesperado");
      }
      setLoading(false); // <-- ¡Agrega esto aquí!
    });
}, [apiUrl, t, navigate]);


   if (error) {
  return <div className="p-6 text-red-600">{error}</div>;
  }

  // Manejo de loading
  if (loading) {
    return <div className="loader text-center py-8">{t('loading')}</div>;
  }

  return (


  

    
    <div className="api-directory-container p-4">
        <div
  className="bg-[url('/src/assets/openAPI3.png')] bg-cover bg-center rounded-xl p-6 mb-8"
    >
     <h1 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">{t('title')}</h1>
     <p className="mb-6 text-white drop-shadow">{t('subtitle')}  </p>
      

  
  <div className="search-filter-container mb-6">
    <input
      type="text"
      placeholder={t('searchPlaceholder') || "Buscar APIs..."}
      className="search-bar p-2 border rounded w-full md:w-1/2"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div className="flex justify-between items-center mt-2">
      <span className="text-sm text-gray-500">
        {filteredApis.length} {t('apisFound')}
      </span>
      <button className="sort-button px-3 py-1 bg-gray-200 rounded text-sm">
        {t('sort')}
      </button>
    </div>
  </div>

</div>



<div className="reflection flex gap-2 flex-wrap justify-center max-w-6xl mx-auto py-6">
  {letters.map((letter) => (
    <button
      key={letter}
      onClick={() => onSelectLetter(letter)}
      className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 font-semibold shadow-[0_0_6px_rgba(99,102,241,0.6)] transition-all duration-300
        ${presentLetters.has(letter)
          ? "text-gray-600 hover:text-white hover:bg-indigo-500"
          : "text-gray-300 bg-gray-100 cursor-not-allowed"
        }`
      }
      disabled={!presentLetters.has(letter)}
    >
      {letter}
    </button>
  ))}
</div>


      {filteredApis.length === 0 ? (
        <div className="no-results text-center py-8">
          <h3 className="text-lg font-medium">{t('noAPIsfound')}</h3>
          <p className="text-gray-500">
            {searchTerm
              ? t('tryAdjusting')
              : t('noResultsText')}
          </p>
        </div>
      ) : (
        <div className="api-list-container overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   {t('name')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   {t('version')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   {t('status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   {t('description')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   {t('actions')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApis.map((api) => (
                <tr key={api.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a id={`anchor-${api.name[0]}`}>
                      <span className="sr-only">{`Anchor for ${api.name}`}</span>
                    </a>
                    <span className="flex items-center gap-2">
                    <button
                        onClick={onSelectTopPage}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-white hover:bg-indigo-500 transition-all duration-300 font-semibold shadow-[0_0_6px_rgba(99,102,241,0.6)]"
                    >
                    {api.startLetter}
                    </button>
                    {api.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{api.version}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        api.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {api.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-normal max-w-xs">
                    {api.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                     <button
              className="text-blue-600 hover:text-blue-900 underline"
              onClick={() => {
                setSelectedApi(api);
                setShowModal(true);
              }}
            >
              {t('viewDetails')}
            </button>
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Modal */}
 {/* Modal */}
{showModal && selectedApi && (
  <dialog
  open
  className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-0 border-0"
  tabIndex={-1}
>

    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full relative">
  <ApiDetail apiId={selectedApi.id} onClose={() => setShowModal(false)} />
</div>
  </dialog>
)}
          </table>
        </div>
      )}
    </div>
  );
}

