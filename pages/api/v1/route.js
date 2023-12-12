// pages/api/process-transaction.js
import Midtrans from "midtrans-client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const snap = new Midtrans.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-v68uHDPQ4USYInBPSz7k7FPF", // Replace with your Midtrans server key
      clientKey: "SB-Mid-client-YBX8emzO7GA5uYBc", // Replace with your Midtrans client key
    });

    const parameter = {
      transaction_details: {
        order_id: "VP-" + Date.now(),
        gross_amount: req.body.total,
      },
    };

    const transaction = await snap.createTransaction(parameter);

    const dataPayment = {
      response: JSON.stringify(transaction),
    };
    const token = transaction.token;

    res.status(200).json({ message: "Berhasil", dataPayment, token });
  } catch (error) {
    console.error("Error processing transaction:", error);
    res.status(500).json({ message: error.message });
  }
}
