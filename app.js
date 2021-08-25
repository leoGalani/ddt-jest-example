module.exports.parity =  async (number) => {
    if (typeof number != 'number') {
        return 'nan'   
    } else {
        return number % 2 == 0 ? 'even' : 'odd';
    }
} 