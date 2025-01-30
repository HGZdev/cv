import {format, parseISO} from "date-fns";
import {enUS, pl} from "date-fns/locale";

export const encodeString = (phone: string): string => {
  return phone
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
};

export const decodeString = (encoded: string): string => {
  return encoded
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) - 1))
    .join("");
};

/**
 * Formats a given date into the specified format with locale support.
 * @param date - The date to format (string, Date, or number).
 * @param dateFormat - The format string (default: 'yyyy-MM-dd HH:mm:ss').
 * @param locale - The locale to use ('en' for English, 'pl' for Polish, default is 'en').
 * @returns Formatted date string.
 */
export function formatDate(
  date: string | Date | number,
  dateFormat: string = "yyyy-MM-dd HH:mm:ss",
  locale: "en" | "pl" = "en"
): string {
  try {
    let parsedDate: Date;

    if (typeof date === "string") {
      parsedDate = parseISO(date); // Parse string date to Date object
    } else {
      parsedDate = new Date(date);
    }

    // Select the correct locale
    const selectedLocale = locale === "pl" ? pl : enUS;

    return format(parsedDate, dateFormat, {locale: selectedLocale});
  } catch (error) {
    console.error("Invalid date:", error);
    return "Invalid Date";
  }
}
