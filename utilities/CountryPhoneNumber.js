import { parsePhoneNumberFromString } from "libphonenumber-js";

export const CountryPhoneNumber = (raw, countryCode = "TR") => {
  try {
    const phone = parsePhoneNumberFromString(raw, countryCode);
    return phone ? phone.formatInternational() : raw;
  } catch (error) {
    return raw;
  }
};
