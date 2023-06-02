import { WithUuid } from "../../common/mixins/with-uuid.mixin/with-uuid.mixin";

export class Coffee {
    constructor(public name: string) {}
}

const CoffeeWithUUID = WithUuid(Coffee)
const coffee = new CoffeeWithUUID('some Name')
