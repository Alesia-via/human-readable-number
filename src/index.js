module.exports = toReadable

console.log(toReadable('919'))

function toReadable(number) {
    if (number === 0) {
            return 'zero';
        }
        let digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
        let twoDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
        let dozens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
        let readable = '';
        let h = Math.trunc(number / 100);
        
        if (h > 0) {
            readable = `${digit[h]} hundred`;
        }
        let remains = number - h * 100;
        let d = Math.trunc(remains / 10);
        if (d === 1) {
            readable = `${readable} ${twoDigit[remains - 10]}`;
            return readable.trim(); }
        if (d >= 2){
            readable = `${readable} ${dozens[d - 1]}`;
        }
        
        let n = number - h * 100 - d * 10;
        if (n > 0) {
            readable = `${readable} ${digit[n]}`;
        }
    
        return readable.trim();
    }