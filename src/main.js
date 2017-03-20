import { Foo } from './lib/foo';
import * as _ from "lodash";

let fun = async () => {

    let f = new Foo("Bibby");
    let r = f.getFullInfo();
    console.log(r);

    let rAsync = await f.getFullInfoAsync();
    console.log(rAsync);

    
    
}

fun();

