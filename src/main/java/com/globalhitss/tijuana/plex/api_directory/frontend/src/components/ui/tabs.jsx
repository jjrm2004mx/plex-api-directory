export function Tabs({ value, onValueChange, children, className = "" }) {
  // Este componente solo renderiza sus hijos, el control lo maneja el padre
  // Provee contexto a los hijos si lo deseas mejorar en el futuro
  return <div className={className}>{children}</div>;
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex space-x-2 border-b ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, activeValue, onClick, children, className = "", ...props }) {
  const isActive = value === activeValue;
  return (
    <button
      className={`px-4 py-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
        isActive ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-indigo-600"
      } ${className}`}
      onClick={onClick}
      data-value={value}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, activeValue, children, className = "" }) {
  if (value !== activeValue) return null;
  return <div className={className}>{children}</div>;
}