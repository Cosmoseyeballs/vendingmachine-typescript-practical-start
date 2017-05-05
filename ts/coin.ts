
export abstract class Coin{
    // private value:number;
    constructor(public value:number){
        this.value = value;
    }
    abstract getImageUrl():string
}


export class Quarter extends Coin{
    constructor(){
        super(.25);
    }
  
    getImageUrl():string{
        return "img/quarter.jpg";
    }
}

export class Dime extends Coin{
    // private value = .10;
    // get Value(){
    //     return this.value;
    // }

    constructor(){
        super(.10);
    }
    getImageUrl():string{
        return "img/dime.jpg"
    }
}


export class Dollar extends Coin{
    // private value = .10;
    // get Value(){
    //     return this.value;
    // }

    constructor(){
        super(1);
    }
    getImageUrl():string{
        return "img/dollar.jpg"
    }
}

export class Half extends Coin{
    // private value = .10;
    // get Value(){
    //     return super.value;
    // }

    constructor(){
        super(.50);
    }
    getImageUrl():string{
        return "img/half.jpg"
    }
}

