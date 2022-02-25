module.exports = function reverse (n) {
    (n < 0) ? n = -n : n;
    n = n + ''
    return n.split("").reverse().join('');
}
