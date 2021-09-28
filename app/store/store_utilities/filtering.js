import moment from 'moment';

export const typeEventsFiltering = (data, type, when) => {

    const typeFilterResults = data; 

        if (type !== 'All' && when == 'Now') {
            typeFilterResults = data.filter(
                    (ele) =>
                        moment(ele.utc).isBetween(timeNow, endOfDay) &&
                        ele.event.type == type,
                )
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (type !== 'All' && when == 'Tonight') {
             typeFilterResults = data.filter(
                    (ele) =>
                        moment(ele.utc).isBetween(night, endOfDay) &&
                        ele.event.type == type,
                )
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (type !== 'All' && when == 'Tomorrow') {
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
        if (type !== 'All' && when == 'Date') {
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
        if (type == 'All' && when == 'Tonight') {
             typeFilterResults = data.filter((ele) => moment(ele.utc).isBetween(night, endOfDay))
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (type == 'All' && when == 'Tomorrow') {
             typeFilterResults = data.filter((ele) => moment(ele.utc).isSame(tomorrow, 'day'))
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (type == 'All' && when == 'This Weekend') {
            typeFilterResults = data.filter((ele) => moment(ele.utc).isBetween(friday, sunday))
                .sort((a, b) => {
                    return moment(a.utc).diff(b.utc);
                });
        }
        if (type == 'All' && when == 'Date') {
            typeFilterResults = data;
        }
        return typeFilterResults;
}


