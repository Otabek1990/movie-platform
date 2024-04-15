export const sliceText = (str, count) => {
    if(str.length>20) return str.slice(0, count) + "...";
    return str
};
