/**
 * Provides method to format date
 * @param date
 */
export function formatDate (date : string | undefined){

    let year = date?.slice(0,4);
    let month = date?.slice(5,7);
    let day = date?.slice(8,10);
    let hour = date?.slice(11,13);
    let minute = date?.slice(14,16);
    return  day + '.' + month + '.'+ year + ' '+ hour + ':' + minute;
}