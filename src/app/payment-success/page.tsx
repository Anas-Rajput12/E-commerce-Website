"use client";

import React from "react";

export default function PaymentSuccess() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "4rem auto",
        padding: "2rem",
        textAlign: "center",
        borderRadius: "12px",
        background: "linear-gradient(to top right, #64748b, #1e293b)",
        color: "white",
        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1rem" }}>
        🎉 Payment Successful!
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#cbd5e1" }}>
        Thank you for your payment. Your transaction has been processed successfully.
      </p>

      <div
        style={{
          backgroundColor: "#00ffff",
          color: "#1e293b",
          padding: "1rem 2rem",
          borderRadius: "8px",
          fontSize: "2rem",
          fontWeight: "700",
          display: "inline-block",
          marginBottom: "2rem",
        }}
      >
        Payment Complete
      </div>

      <div>
        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "0.75rem 2rem",
            background: "#4c1d95",
            color: "#00ffff",
            fontWeight: "600",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#00ffff";
            (e.currentTarget as HTMLAnchorElement).style.color = "#1e293b";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#4c1d95";
            (e.currentTarget as HTMLAnchorElement).style.color = "#00ffff";
          }}
        >
          Go to Homepage
        </a>
      </div>
    </main>
  );
}
