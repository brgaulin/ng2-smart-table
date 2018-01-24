export class LocalFilter {
    static filter(data, field, search, customFilter) {
        const filter = customFilter ? customFilter : this.FILTER;
        return data.filter((el) => {
            const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    }
}
LocalFilter.FILTER = (value, search) => {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
};
//# sourceMappingURL=local.filter.js.map