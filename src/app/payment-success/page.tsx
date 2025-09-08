"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || "0";

  return (
    <main
      role="main"
      className="max-w-3xl mx-auto p-10 text-white text-center rounded-md bg-gradient-to-tr from-slate-400 to-zinc-900"
    >
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Thank you!</h1>
        <h2 className="text-xl md:text-2xl">You successfully sent</h2>

        <div className="bg-white p-4 rounded-md text-black mt-6 text-3xl md:text-4xl font-bold">
          ${amount}
        </div>
      </div>
    </main>
  );
}
