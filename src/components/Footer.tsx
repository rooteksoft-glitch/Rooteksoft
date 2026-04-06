export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-lg font-bold text-blue-400">Rooteksoft</p>
        <p className="text-sm text-gray-400 mt-2">
          &copy; {year} Rooteksoft. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}