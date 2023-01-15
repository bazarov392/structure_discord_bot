module.exports = (length) => {
    let simbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let string = '';
    for (var i = 0; i < length; i++)
        string += simbols.charAt(Math.floor(Math.random() * simbols.length));
    return string;
}