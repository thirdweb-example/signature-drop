import Image from "next/image";
import React from "react";

export default function ThirdwebGuideFooter() {
  const url = "https://github.com/thirdweb-example/signature-drop";

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #262935",
          cursor: "pointer",
        }}
        role="button"
        onClick={() => window.open(url, "_blank")}
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        <Image
          src="/github.png"
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(url, "_blank")}
          alt="github"
        />
      </div>
    </>
  );
}
