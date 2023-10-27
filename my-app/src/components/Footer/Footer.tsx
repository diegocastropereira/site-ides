export const Footer = () => {
  return (
    <footer className="bg-yellow-500 p-3 text-black h-40 flex gap-5 items-center justify-between">
      <div className="flex items-center gap-1">
        <samp className="font-black text-2xl">SNCT</samp>
        <samp className="text-blue-500 font-black text-2xl">2</samp>
        <samp className="text-green-500 font-black text-2xl">0</samp>
        <samp className="text-red-500 font-black text-2xl">2</samp>
        <samp className="text-black font-black text-2xl">3</samp>
      </div>
        <p>&copy; Paulo Victor </p>

      <div className="flex items-center gap-2 justify-center">
        <p className="uppercase font-bold text-slate-800">Integrado em Desenvolvimento de Sistema</p>
        <p className="text-blue-500 font-black">{`</>`}</p>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="/img/download-removebg-preview.png"
          alt="IFAM Logo"
          className="mx-2"
          height={40}
          width={40}
        />
        <img
          src="/img/gvf-removebg-preview.png"
          alt="ENCT Logo"
          className="mx-2"
          height={240}
          width={240}
        />
      </div>
    </footer>
  );
};
