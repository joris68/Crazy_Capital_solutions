
import {data} from './data/all_assets';
import Fuse from 'fuse.js'


function createIndex(){
    const options = { keys: ['Symbol', 'Security'], threshold: 0.2, caseSensitive: false };
    return new Fuse(data, options);
}

export const fuseIndex = createIndex();