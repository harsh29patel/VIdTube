class apiError extends Error{   // in node js there is a built in extension
    constructor(statusCode , message = "Something gone wrong",errors = [],stack = ""){
        super(message) // super because extends is there
        this.statusCode = statusCode,
        this.data = null
        this.message = message,
        this.stack = stack,
        this.errors = errors,
        this.success = false


        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this , this.constructor)
        }
    }
} 

export {apiError}