export const sliceText = (str, count) => {
    if(str.length>50) return str.slice(0, count) + "...";
    return str
};
