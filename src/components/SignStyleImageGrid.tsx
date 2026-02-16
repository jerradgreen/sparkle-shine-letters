import { Card, CardContent } from "@/components/ui/card";
import { signStyleQuoteOptions } from "@/data/signStyleQuoteOptions";

interface SignStyleImageGridProps {
  variant?: "default" | "compact";
  onSelect: (path: string) => void;
}

export const SignStyleImageGrid = ({ variant = "default", onSelect }: SignStyleImageGridProps) => {
  const isCompact = variant === "compact";
  const imageHeight = isCompact ? "h-36" : "h-56";
  const titleSize = isCompact ? "text-lg" : "text-2xl";
  const descSize = isCompact ? "text-xs" : "text-sm";

  return (
    <div className={`grid grid-cols-2 ${isCompact ? "gap-3" : "md:grid-cols-3 gap-6"}`}>
      {signStyleQuoteOptions.map((style, index) => (
        <Card
          key={index}
          className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          onClick={() => onSelect(style.path)}
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <img
                src={style.image}
                alt={style.title}
                className={`w-full ${imageHeight} object-cover group-hover:scale-110 transition-transform duration-500 ${style.imageScale || ""}`}
                style={{ objectPosition: style.imagePosition || "center" }}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className={`text-white font-bold ${titleSize} mb-1`}>
                      {style.title}
                    </h3>
                    <p className={`text-white/90 ${descSize} leading-snug`}>
                      {style.description}
                    </p>
                  </div>
                  <div className="text-white text-xs flex items-center gap-1 mt-auto">
                    click to quote <span className="text-sm">→</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
