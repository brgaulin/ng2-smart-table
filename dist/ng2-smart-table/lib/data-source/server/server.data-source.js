import { URLSearchParams } from '@angular/http';
import { LocalDataSource } from '../local/local.data-source';
import { ServerSourceConf } from './server-source.conf';
import { getDeepFromObject } from '../../helpers';
import 'rxjs/add/operator/toPromise';
export class ServerDataSource extends LocalDataSource {
    constructor(http, conf = {}) {
        super();
        this.http = http;
        this.lastRequestCount = 0;
        this.conf = new ServerSourceConf(conf);
        if (!this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
    }
    count() {
        return this.lastRequestCount;
    }
    getElements() {
        return this.requestElements().map(res => {
            this.lastRequestCount = this.extractTotalFromResponse(res);
            this.data = this.extractDataFromResponse(res);
            return this.data;
        }).toPromise();
    }
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    extractDataFromResponse(res) {
        const rawData = res.json();
        const data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error(`Data must be an array.
    Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
    }
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    extractTotalFromResponse(res) {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            const rawData = res.json();
            return getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    }
    requestElements() {
        return this.http.get(this.conf.endPoint, this.createRequestOptions());
    }
    createRequestOptions() {
        let requestOptions = {};
        requestOptions.params = new URLSearchParams();
        requestOptions = this.addSortRequestOptions(requestOptions);
        requestOptions = this.addFilterRequestOptions(requestOptions);
        return this.addPagerRequestOptions(requestOptions);
    }
    addSortRequestOptions(requestOptions) {
        const searchParams = requestOptions.params;
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                searchParams.set(this.conf.sortFieldKey, fieldConf.field);
                searchParams.set(this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
        }
        return requestOptions;
    }
    addFilterRequestOptions(requestOptions) {
        const searchParams = requestOptions.params;
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach((fieldConf) => {
                if (fieldConf['search']) {
                    searchParams.set(this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
        }
        return requestOptions;
    }
    addPagerRequestOptions(requestOptions) {
        const searchParams = requestOptions.params;
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            searchParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            searchParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return requestOptions;
    }
}
//# sourceMappingURL=server.data-source.js.map