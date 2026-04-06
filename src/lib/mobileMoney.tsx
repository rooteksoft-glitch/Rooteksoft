export type PaymentStatus = "success" | "pending" | "failed";

export const processMobileMoneyPayment = async (phone: string, amount: number): Promise<{ status: PaymentStatus; message: string }> => {
  // Simulation d'appel API (Orange Money / M-Pesa / Airtel Money)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Paiement de ${amount} initié pour ${phone}`);
      resolve({ status: "success", message: "Paiement réussi via Mobile Money" });
    }, 2000);
  });
};