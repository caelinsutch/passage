import { emailRegex, phoneRegex } from "../Constants";

export const validateEmail = (email: string) =>
  String(email).toLowerCase().match(emailRegex);

export const validatePhone = (phone: string) => String(phone).match(phoneRegex);
