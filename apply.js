Function.prototype.apply = function(context, args) {
    context = context === null ? globalThis : Object(context);

    const key = Symbol("fn");
    context[key] = this;

    const result = context[key](args);

    delete context[key];

    return result;
}