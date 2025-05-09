export default function dateParser(date) {
    const options = {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Sofia'
    }
    const parsedDate = new Date(date).toLocaleDateString('en-GB', options);
    console.log(parsedDate);
    return parsedDate;
}
