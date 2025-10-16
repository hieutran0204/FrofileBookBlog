// "use client";

// export function SpaceBackground() {
//   return (
//     <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//       <div
//         className="absolute inset-0 opacity-40"
//         style={{
//           backgroundImage: "url(/cute-astronauts-bg.png)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       />

//       <div className="absolute inset-0">
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-primary animate-twinkle"
//             style={{
//               width: Math.random() * 3 + 1 + "px",
//               height: Math.random() * 3 + 1 + "px",
//               left: Math.random() * 100 + "%",
//               top: Math.random() * 100 + "%",
//               animationDelay: Math.random() * 3 + "s",
//               animationDuration: Math.random() * 2 + 2 + "s",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

export function SpaceBackground() {
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    // Chỉ generate stars trên client
    const generatedStars = [...Array(50)].map((_, i) => i);
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url(/cute-astronauts-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute inset-0">
        {stars.map((i) => {
          const seed = i * 12345.6789; // Deterministic seed
          return (
            <div
              key={i}
              className="absolute rounded-full bg-primary animate-twinkle"
              style={{
                width: (Math.sin(seed) * 0.5 + 0.5) * 3 + 1 + "px",
                height: (Math.cos(seed) * 0.5 + 0.5) * 3 + 1 + "px",
                left: (Math.sin(seed * 2) * 0.5 + 0.5) * 100 + "%",
                top: (Math.cos(seed * 3) * 0.5 + 0.5) * 100 + "%",
                animationDelay: (Math.sin(seed * 4) * 0.5 + 0.5) * 3 + "s",
                animationDuration:
                  (Math.sin(seed * 5) * 0.5 + 0.5) * 2 + 2 + "s",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
