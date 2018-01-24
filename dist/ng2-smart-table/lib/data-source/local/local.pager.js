export class LocalPager {
    static paginate(data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    }
}
//# sourceMappingURL=local.pager.js.map