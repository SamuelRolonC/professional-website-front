/*
Extracts date only in string with date and time.
*/
export function getDate(strDate) {
    return strDate.substring(0, 10);
}

/*
Returns month in text format. Requires date in format DD/MM/YYYY.
*/
export function getTextMonth(strDate) {
    const months = [ 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 
        'september', 'october', 'november', 'december' ];
    const strMonthNumber = strDate.substring(3, 5);
    
    return months[parseInt(strMonthNumber)];
}

/*
Returns year. Requires date in format DD/MM/YYYY.
*/
export function getYear(strDate) {
    return strDate.substring(6, 10);
}