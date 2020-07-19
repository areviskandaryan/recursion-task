
/**
 * @description get Array from list values
 * @param {Object} list -list of objects
 * @return {Object []}- Array which contains list values
 */



let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    function iter(list,acc){
        if(list.next){
            return iter(list.next,[...acc, list.value])
        }
        return [...acc,list.value];
    }
    return iter(list,[])
}
console.log(printList(list))