import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AD_PATHS = [
  "/",
  "/resultcpns1",
  "/resultcpns2",
  "/resultcpns3",
  "/resultcpns6",
  "/resultcpns7",
  "/resultcpns8",
  "/resultcpns9",
  "/resultcpns10",
  "/resultcpnsvip1",
  "/resultcpnsvip2",
];

const MonetagAd = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Hanya jalankan pada URL yang ditentukan
    if (!AD_PATHS.includes(pathname)) return;

    // Cegah pemasangan script berulang
    if (document.getElementById("monetag-12255326")) return;

    const script = document.createElement("script");

    script.id = "monetag-12255326";
    script.dataset.zone = "12255326";
    script.src = "https://nap5k.com/tag.min.js";
    script.async = true;

    script.onerror = () => {
      script.remove();
      console.error("Monetag gagal dimuat");
    };

    document.body.appendChild(script);
  }, [pathname]);

  return null;
};

export default MonetagAd;
