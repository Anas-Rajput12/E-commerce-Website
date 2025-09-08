// File: app/payment-success/page.tsx
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  // Get search params
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || "0";

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "2rem",
        textAlign: "center",
        borderRadius: "12px",
        background: "linear-gradient(to top right, #64748b, #1e293b)",
        color: "white",
        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          marginBottom: "1rem",
        }}
      >
        🎉 Thank you!
      </h1>
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        You successfully sent
      </h2>

      <div
        style={{
          backgroundColor: "white",
          color: "#1e293b",
          padding: "1rem 2rem",
          borderRadius: "8px",
          fontSize: "2.5rem",
          fontWeight: "700",
          display: "inline-block",
        }}
      >
        ${amount}
      </div>

      <p
        style={{
          marginTop: "2rem",
          fontSize: "1rem",
          color: "#cbd5e1",
        }}
      >
        Your payment has been processed successfully.
      </p>
    </main>
  );
}
