module.exports = function validImageUrl (url) {
    const urlExtension = /\.(jpg|jpeg|png|gif)$/;
    return urlExtension.test(url);
};