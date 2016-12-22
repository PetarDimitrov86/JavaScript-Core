function drawCalendar([day, month, year]){
    let result = '<table>\n';
    result += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';
    let previousMonth = new Date(year, month - 1, 0);
    let lastMonthLastDate = previousMonth.getDate();
    let firstDateCurrentMonth = new Date(previousMonth.getTime() + 24 * 60 * 60 * 1000);
    let lastDayLastMonth = previousMonth.getDay();
    result += '  <tr>';
    for (let i = 0; i <= lastDayLastMonth; i++) {
        result += `<td class="prev-month">${lastMonthLastDate - lastDayLastMonth + i}</td>`
    }
    let counter = 1;
    for (let i = lastDayLastMonth; i < 6; i++) {
        result += `<td>${counter++}</td>`;
    }
    result += '</tr>\n  <tr>';
    let currentMonthLastDate = new Date(year, month, 0).getDate();
    for (let i = counter; i <= currentMonthLastDate; i++) {
        if (i == day){
            result += `<td class="today">${day}</td>`;
        }
        else {
            result += `<td>${i}</td>`;
        }
        counter++;
        if ((i + firstDateCurrentMonth.getDay()) % 7 == 0)
            result += '</tr>\n  <tr>'
    }
    let daysFromNextMonth = (7 * 6 - counter - lastDayLastMonth) % 7;
    for (let i = 1; i <= daysFromNextMonth; i++) {
        result += `<td class="next-month">${i}</td>`
    }
    
    result += '</tr>\n</table>\n';
    return result;
}

console.log(drawCalendar([24, 12, 2012]));