class Repository {
    constructor(props) {
        this.props=props;
        this.data= new Map();
    }

    get count(){
        return Array.from(this.data.keys()).length;
    }
    validateEntry(value){
        let propsKeys = Object.keys(this.props);
        Object.keys(value).forEach(key=>{
            if(!propsKeys.includes(key)){
                throw new Error(`Property ${key} is missing from the entity!`);
            }
            if(typeof value[key] !== this.props[key]){
                throw new Error(`Property ${key}  is of incorrect type!`);
            }
        });
        return true;
    }
    add(value){
        if(this.validateEntry(value)){
            this.data.set(this.count, value);
            return this.count-1;
        }
    }

    get(id){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        return this.data.get(id);
    }

    update(id, newEntity){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        if(this.validateEntry(newEntity)){
            this.data.set(id,newEntity)
        }
    }

    del(id){
        if(!this.data.delete(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
    }
}

let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
let repository = new Repository(properties);

console.log(repository.count);
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
console.log(repository.add(entity));
console.log(repository.add(entity));
console.log(repository.count);
repository.del(0);
console.log(repository.count);