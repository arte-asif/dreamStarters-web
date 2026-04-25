"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeModal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 800); // 0.8 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      
      {/* Modal Box */}
      <div className="bg-black rounded-2xl shadow-2xl px-10 py-12 border border-white/10">
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Logo 1 - Close Modal */}
          <div
            onClick={() => setOpen(false)}
            className="cursor-pointer transform transition duration-300 hover:scale-110 hover:brightness-110"
          >
            <Image
              src="/images/modal1.png"
              alt="Option 1"
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </div>

          {/* Logo 2 - Redirect */}
          <div
            onClick={() => router.push("/nexa")}
            className="cursor-pointer transform transition duration-300 hover:scale-110 hover:brightness-110"
          >
            <Image
              src="/images/modalP2.png"
              alt="Option 2"
              width={250}
              height={280}
              className="object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </div>
  );
}