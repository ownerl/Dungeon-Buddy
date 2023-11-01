module.exports = function validImageUrl (url) {
    console.log('url this shud be ',url)
    if (url === '') {
        return true;
    }
    const urlExtension = /\.(jpg|jpeg|png|gif)$/;
    return urlExtension.test(url);
};