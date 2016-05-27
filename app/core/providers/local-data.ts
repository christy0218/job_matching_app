import {Config} from '../../providers/config';
import {Injectable} from '@angular/core';
import {Storage, SqlStorage} from 'ionic-angular';
import * as _ from 'lodash';

/**
 * Data stored in SqlStorage, includes:
 *  - user preference
 *  - offline data
 *  - offline files
 */
@Injectable()
export class LocalData {
    
    private storage: Storage = new Storage(SqlStorage);
    
    constructor(
        config: Config
    ) {
        console.log('LocalData constructor');
    }
    
    set(key: string, value: any): Promise<any> {
        return this.storage.set(key, value);
    }
    
    get(key: string, default_value?: any): Promise<any> {
        return this.storage.get(key).then(data => {
            return data || default_value;
        });
    }
}