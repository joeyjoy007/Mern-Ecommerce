class ErrorHandler extends Error{
    constructor(message,statusCode){
    super(message)
    this.statusCode = statusCode

    Error.stackTraceLimit(this,constructor)
}
}

module.exports = ErrorHandler