export const buildUrl = function(base, params) {
    let url = new URL(base);
    params.forEach(element => {
        url.searchParams.append(element.name, element.value);
    });
    return url.href;
};