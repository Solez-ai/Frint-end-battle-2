import { Star } from "lucide-react";

const TrustIndicators = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm mb-12">
      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="font-medium">4.8 rating on</span>
        <span className="font-bold">Capterra</span>
      </div>

      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="font-medium">4.8 rating on</span>
        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
          G
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="font-medium">350+ reviews on</span>
        <span className="font-bold text-blue-300">Xero</span>
      </div>

      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="font-medium">550+ reviews on</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
          <span className="font-bold">QuickBooks</span>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
