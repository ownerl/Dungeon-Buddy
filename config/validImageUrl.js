module.exports = function validImageUrl (url) {
    if (url === '') {
        return true;
    }
    const urlExtension = /\.(jpg|jpeg|png|gif)$/;
    return urlExtension.test(url);
};