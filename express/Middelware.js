module.exports = async function verify (req, res, next) {
    console.log('Hello from middleware');
    next()
}

