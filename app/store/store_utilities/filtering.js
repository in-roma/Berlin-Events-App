import moment from 'moment';

// Moments functions
const timeNow = moment().utcOffset(0, true).subtract(2, 'hours');
const endOfDay = moment().utcOffset(0, true).endOf('day');
const night = moment().utcOffset(0, true).endOf('day').subtract(5, 'hours');
const tomorrow = moment().utcOffset(0, true).add(32, 'h');
const friday = moment().weekday(5);
const sunday = moment().weekday(7);

export const typeEventsFiltering = (data, type, when) => {
    const typeFilterResults = []; 

        if (data && type !== 'All' && when == 'Now') {
            typeFilterResults = data.filter(
                    (ele) =>
                        moment(ele.utc).isBetween(timeNow, endOfDay) &&
                        ele.event.type == type,
                )
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (data && type !== 'All' && when == 'Tonight') {
             typeFilterResults = data.filter(
                    (ele) =>
                        moment(ele.utc).isBetween(night, endOfDay) &&
                        ele.event.type == type,
                )
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (data && type !== 'All' && when == 'Tomorrow') {
             typeFilterResults = data.filter(
                    (ele) =>
                        moment(ele.utc).isSame(tomorrow, 'day') &&
                        ele.event.type == type,
                )
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (type !== 'All' && when == 'This Weekend') {
             typeFilterResults = data.filter(
                    (ele) =>
                        moment(ele.utc).isBetween(friday, sunday) &&
                        ele.event.type == type,
                )
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (data && type !== 'All' && when == 'Date') {
             typeFilterResults = data.filter((ele) => ele.event.type == type)
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }

        if (type == 'All' && when == 'Now') {
             typeFilterResults = data.filter((ele) => moment(ele.utc).isBetween(timeNow, endOfDay))
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (data && type == 'All' && when == 'Tonight') {
             typeFilterResults = data.filter((ele) => moment(ele.utc).isBetween(night, endOfDay))
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (data && type == 'All' && when == 'Tomorrow') {
             typeFilterResults = data.filter((ele) => moment(ele.utc).isSame(tomorrow, 'day'))
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (data && type == 'All' && when == 'This Weekend') {
            typeFilterResults = data.filter((ele) => moment(ele.utc).isBetween(friday, sunday))
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (data && type == 'All' && when == 'Date') {
            typeFilterResults = data;
        }
    return typeFilterResults;
}


