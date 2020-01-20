define(function () {
    
    var ExceptionHandler = {
        
        exceptionCallback: null,
        
        wrapClick: function (func, msg) {
            msg = msg || "Click handler exception";
            return function (e) {
                try {
                    return func.apply($(this), e);
                } catch (ex) {
                    ex.message = ex.message || msg;
                    if (ExceptionHandler.exceptionCallback) {
                        ExceptionHandler.exceptionCallback(ex);
                    } else {
                        throw ex;
                    }
                }
            };
        },
        
        wrapCall: function (caller, func, msg) {
            msg = msg || "ExceptionHandler exception";
            try {
                func.apply(caller);
            } catch (ex) {
                ex.message = ex.message || msg;
                if (ExceptionHandler.exceptionCallback) {
                    ExceptionHandler.exceptionCallback(ex);
                } else {
                    throw ex;
                }
            }
        }
    };

    return ExceptionHandler;
});
