class Carbona {
    constructor(date = null) {
        this.date = date ? new Date(date) : new Date();
    }

    static now() {
        return new Carbona();
    }

    static parse(dateString) {
        return new Carbona(dateString);
    }

    addDays(days) {
        this.date.setDate(this.date.getDate() + days);
        return this;
    }

    addMonths(months) {
        this.date.setMonth(this.date.getMonth() + months);
        return this;
    }

    addYears(years) {
        this.date.setFullYear(this.date.getFullYear() + years);
        return this;
    }

    subDays(days) {
        this.date.setDate(this.date.getDate() - days);
        return this;
    }

    subMonths(months) {
        this.date.setMonth(this.date.getMonth() - months);
        return this;
    }

    subYears(years) {
        this.date.setFullYear(this.date.getFullYear() - years);
        return this;
    }

    format(formatString = 'YYYY-MM-DD HH:mm:ss') {
        const yearFull = this.date.getFullYear();
        const yearShort = String(yearFull).slice(-2);
        const month = String(this.date.getMonth() + 1).padStart(2, '0');
        const day = String(this.date.getDate()).padStart(2, '0');
        const dayWithSuffix = `${this.date.getDate()}${this.getDaySuffix(this.date.getDate())}`;
        const hours = String(this.date.getHours()).padStart(2, '0');
        const minutes = String(this.date.getMinutes()).padStart(2, '0');
        const seconds = String(this.date.getSeconds()).padStart(2, '0');

        return formatString
            .replace('YYYY', yearFull)
            .replace('YY', yearShort)
            .replace('MM', month)
            .replace('DD', day)
            .replace('Do', dayWithSuffix) // 'Do' for day with suffix
            .replace('HH', hours)
            .replace('mm', minutes)
            .replace('ss', seconds);
    }

    getDaySuffix(day) {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }

    startOfDay() {
        this.date.setHours(0, 0, 0, 0);
        return this;
    }

    endOfDay() {
        this.date.setHours(23, 59, 59, 999);
        return this;
    }

    diffInDays(date) {
        const diff = this.date - new Date(date);
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    isBefore(date) {
        return this.date < new Date(date);
    }

    isAfter(date) {
        return this.date > new Date(date);
    }

    toDate() {
        return this.date;
    }

    toISOString() {
        return this.date.toISOString();
    }

    toString() {
        return this.date.toString();
    }
}

module.exports = Carbona;

