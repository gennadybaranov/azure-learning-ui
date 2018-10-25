class ValidationResult {
    constructor(errorCodes = []) {
        this.isValid = errorCodes.length === 0;
        this.errorCodes = errorCodes;
    }

    static createSuccessful() {
        return new ValidationResult();
    }
}

export default ValidationResult;
