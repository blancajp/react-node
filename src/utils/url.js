export const buildUrl = function(base, path, params) {
    let url = new URL(base);
    path.forEach(element => {
        url.pathname = url.pathname + '/' + element;
    });
    params.forEach(element => {
        url.searchParams.append(element.name, element.value);
    });
    return url.href;
};