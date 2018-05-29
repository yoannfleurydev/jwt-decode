export const HEADER = 0;
export const BODY = 1;

export default class JWT {
  /**
   * Decode the JWT and return the BODY. You can rerun this function by passing
   * the part parameter to get the HEADER.
   * @param {string} JWT The full JWT, or at least the first two parts.
   * @param {number} part One of the two const HEADER or BODY defined in JWT class.
   * @returns {string} The decoded body of the JWT by default of the HEADER if the
   * part parameter is given.
   */
  static decodeAndGetPart(JWT, part = BODY) {
    return atob(JWT.split(".")[part]);
  }
}
