interface ModernHeaderProps {
  category: string;
  title: string;
  subtitle: string;
  hasGradient?: boolean;
}

const ModernHeader = ({ category, title, subtitle, hasGradient = true }: ModernHeaderProps) => {
  return (
    <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {hasGradient && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-subtle"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
          </div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-black/5 rounded-full">
          <span className="text-sm uppercase tracking-widest text-gray-600 font-light">{category}</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ModernHeader;
