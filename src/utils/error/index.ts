import { error } from "@the-minimal/error";

/**
 * Throws ValidationError
 *
 * @param cause - What caused the error.
 * @param message - Optional error message.
 *
 * @throws {ValidationError}
 */
export const ValidationError = error("ValidationError");
