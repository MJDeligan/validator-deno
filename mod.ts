import equals from "./src/lib/equals.ts";
import contains from "./src/lib/contains.ts";
import blacklist from "./src/lib/blacklist.ts";
import escape from "./src/lib/escape.ts";

// validator version
const version = "1.0.0-beta";

// validators
import isAfter from "./src/lib/isAfter.ts";
import isAlpha, {
  locales as isAlphaLocales,
} from "./src/lib/isAlpha.ts";
import isAlphanumeric, {
  locales as isAlphanumericLocales,
} from "./src/lib/isAlphanumeric.ts";
import isAscii from "./src/lib/isAscii.ts";
import isBase32 from "./src/lib/isBase32.ts";
import isBase64 from "./src/lib/isBase64.ts";
import isBefore from "./src/lib/isBefore.ts";
import isBIC from "./src/lib/isBIC.ts";
import isBoolean from "./src/lib/isBoolean.ts";
import isBtcAddress from "./src/lib/isBtcAddress.ts";
import isByteLength from "./src/lib/isByteLength.ts";
import isCreditCard from "./src/lib/isCreditCard.ts";
import isCurrency from "./src/lib/isCurrency.ts";
import isDataURI from "./src/lib/isDataURI.ts";
import isDate from "./src/lib/isDate.ts";
import isDecimal from "./src/lib/isDecimal.ts";
import isDivisibleBy from "./src/lib/isDivisibleBy.ts";
import isEAN from "./src/lib/isEAN.ts";
import isEmail from "./src/lib/isEmail.ts";
import isEmpty from "./src/lib/isEmpty.ts";
import isEthereumAddress from "./src/lib/isEthereumAddress.ts";
import isFloat from "./src/lib/isFloat.ts";
import isFullWidth from "./src/lib/isFullWidth.ts";
import isFQDN from "./src/lib/isFQDN.ts";
import isHalfWidth from "./src/lib/isHalfWidth.ts";
import isHash from "./src/lib/isHash.ts";
import isHexadecimal from "./src/lib/isHexadecimal.ts";
import isHexColor from "./src/lib/isHexColor.ts";
import isHSL from "./src/lib/isHSL.ts";
import isIBAN from "./src/lib/isIBAN.ts";
import isIdentityCard from "./src/lib/isIdentityCard.ts";
import isIn from "./src/lib/isIn.ts";
import isInt from "./src/lib/isInt.ts";
import isIP from "./src/lib/isIP.ts";
import isIPRange from "./src/lib/isIPRange.ts";
import isISBN from "./src/lib/isISBN.ts";
import isISIN from "./src/lib/isISIN.ts";
import isISO31661Alpha2 from "./src/lib/isISO31661Alpha2.ts";
import isISO31661Alpha3 from "./src/lib/isISO31661Alpha3.ts";
import isISO8601 from "./src/lib/isISO8601.ts";
import isISRC from "./src/lib/isISRC.ts";
import isISSN from "./src/lib/isISSN.ts";
import isJSON from "./src/lib/isJSON.ts";
import isJWT from "./src/lib/isJWT.ts";
import isLatLong from "./src/lib/isLatLong.ts";
import isLocale from "./src/lib/isLocale.ts";
import isLowerCase from "./src/lib/isLowerCase.ts";
import isMACAddress from "./src/lib/isMACAddress.ts";
import isMagnetURI from "./src/lib/isMagnetURI.ts";
import isMimeType from "./src/lib/isMimeType.ts";
import isMongoId from "./src/lib/isMongoId.ts";
import isMobilePhone, {
  locales as mobilePhoneLocales,
} from "./src/lib/isMobilePhone.ts";
import isMultibyte from "./src/lib/isMultibyte.ts";
import isNumeric from "./src/lib/isNumeric.ts";
import isOctal from "./src/lib/isOctal.ts";
import isPassportNumber from "./src/lib/isPassportNumber.ts";
import isPort from "./src/lib/isPort.ts";
import isPostalCode, {
  locales as postalCodeLocales,
} from "./src/lib/isPostalCode.ts";
import isRFC3339 from "./src/lib/isRFC3339.ts";
import isRgbColor from "./src/lib/isRgbColor.ts";
import isSemVer from "./src/lib/isSemVer.ts";
import isSlug from "./src/lib/isSlug.ts";
import isSurrogatePair from "./src/lib/isSurrogatePair.ts";
import isUpperCase from "./src/lib/isUpperCase.ts";
import isURL from "./src/lib/isURL.ts";
import isUUID from "./src/lib/isUUID.ts";
import isVariableWidth from "./src/lib/isVariableWidth.ts";
import isWhitelisted from "./src/lib/isWhitelisted.ts";
import matches from "./src/lib/matches.ts";
import maxLength from "./src/lib/maxLength.ts";
import minLength from "./src/lib/minLength.ts";

// For testing (resolving keys as string)
interface ValidatorMap {
  [key: string]: any;
}

const validator: ValidatorMap = {
  equals,
  contains,
  blacklist,
  escape,
  isAfter,
  isAlpha,
  isAlphaLocales,
  isAlphanumeric,
  isAlphanumericLocales,
  isAscii,
  isBase32,
  isBase64,
  isBefore,
  isBIC,
  isBoolean,
  isBtcAddress,
  isByteLength,
  isCreditCard,
  isCurrency,
  isDataURI,
  isDate,
  isDecimal,
  isDivisibleBy,
  isEAN,
  isEmail,
  isEmpty,
  isEthereumAddress,
  isFloat,
  isFQDN,
  isFullWidth,
  isHalfWidth,
  isHash,
  isHexadecimal,
  isHexColor,
  isHSL,
  isIBAN,
  isIdentityCard,
  isIn,
  isInt,
  isISIN,
  isISO31661Alpha2,
  isISO31661Alpha3,
  isISO8601,
  isISBN,
  isISRC,
  isISSN,
  isJSON,
  isIP,
  isIPRange,
  isJWT,
  isLatLong,
  isLocale,
  isLowerCase,
  isMACAddress,
  isMagnetURI,
  isMimeType,
  isMongoId,
  isMobilePhone,
  isMultibyte,
  isNumeric,
  isOctal,
  isPassportNumber,
  isPort,
  isPostalCode,
  isRFC3339,
  isRgbColor,
  isSemVer,
  isSlug,
  isSurrogatePair,
  isUpperCase,
  isURL,
  isUUID,
  isVariableWidth,
  isWhitelisted,
  matches,
  maxLength,
  minLength,
  mobilePhoneLocales,
  postalCodeLocales,
  version,
};

export default validator;
