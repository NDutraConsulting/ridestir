export const removeWhiteSpace = (str) =>
{
    return str.replace(/(\r\n|\n|\r| |\t)/gm, "");
};