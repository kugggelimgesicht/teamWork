/**
 * @description функция позволяет получить отформатированную сумму сделки
 * @param {number} count сумма сделки
 * @throws {Error} сумма меньше нуля 
 * @throws {Error} введено значение, не являющееся числом
 * @throws {Error} сумма больше или равна 10**15
 * @returns {string} отформатированная сумма
 */
function formatCount(count) {
    if (!(typeof count == 'number')) {
        throw new Error('NaN')
    }
    if (count < 0) {
        throw new Error('the sum is incorrect');
    }
    if (count >= 10 ** 15) {
        throw new Error('the sum is too big')
    }
    if (count < 1000) {
        return `${Math.round(count)}`;
    }
    if (count < 10 ** 6) {
        return `${Math.round(count / 1000)}K`
    }
    if (count < 10 ** 9) {
        return `${Math.round(count / 10 ** 6)}M`
    }
    if (count < 10 ** 12)
        return `${Math.round(count / 10 ** 9)}B`

}