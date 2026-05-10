// WhatsApp number: 55 (country) + 15 (area) + number
export const WA_NUMBER = '5515997861991';

const DEFAULT_MESSAGE =
  'Olá, Henrique! Gostaria de solicitar um orçamento para meu veículo.';

export function waLink(msg?: string): string {
  const text = encodeURIComponent(msg ?? DEFAULT_MESSAGE);
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}
