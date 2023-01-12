export const Wind = (value:number) => {
    const direction = (value > 0) ? '>>' : '<<';
    const element = direction+value+direction;
    const windValue = (value === 0) ? "" : element.replace("-", "");
    return windValue;
}