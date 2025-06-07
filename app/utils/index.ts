export function formatCurrency(amount?: number | string | null): string | null {
  if (amount === null || amount === undefined) return null;

  const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numericAmount)) return null;

  return `$${(numericAmount / 100).toFixed(2)}`;
}

export function formatDate(dateInput?: string | Date | null): string | null {
  if (!dateInput) return null;

  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return null;

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses van de 0 a 11
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function getPlanInfo(amountPaid: string) {
  switch (String(amountPaid)) {
    case "4900":
      return { name: "Básica", color: "grey" };
    case "8900":
      return { name: "Estándar", color: "green" };
    case "19900":
      return { name: "Pro", color: "blue" };
    case "34900":
      return { name: "Élite", color: "gold" };
    default:
      return { name: "Desconocido", color: "" };
  }
}



