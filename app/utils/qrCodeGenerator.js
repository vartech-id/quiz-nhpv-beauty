import QRCode from "qrcode";

export async function generateQrCode(value, options = {}) {
  if (!value || typeof value !== "string") {
    throw new Error("QR value harus berupa string");
  }

  return await QRCode.toDataURL(value, {
    width: 300,
    margin: 1,
    errorCorrectionLevel: "H",
    ...options,
  });
}