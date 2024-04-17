export const sliceText = (str, count) => {
    if(typeof str!=="string") return;
    if(str?.length>50) return str.slice(0, count) + "...";
    return str
};
