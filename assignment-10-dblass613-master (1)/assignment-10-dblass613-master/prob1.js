Array.prototype.splitEqual = function (num) {

    if(num > this.length){
        var error = new Error(num + " is greater than" + this.length);
        return;
    }

    var arrs = [];
    arrs.length = num;

    if ((this.length % num) == 0) {
        var hold = 0;
        var temp = "";
        for (i = 0; i < num; i++) {
            temp = "";
            for(j = 0; j<this.length/num; j++){
                temp += this[hold] + ",";
            }
            arrs[i] = temp;
        }
    }else{
        var hold = 0;
        var temp = "";
        for (i = 0; i < (num - 1); i++) {
            temp = "";
            for(j = 0; j<this.length/num; j++){
                temp += this[hold++] + ",";
            }
            arrs[i] = temp;
        }
        var length = arrs.length;
        temp = "";
        for(i = hold; i < this.length; i++){
            temp += this[hold++] + ",";
        }
        arrs[num-1] = temp;
        
    }
    return arrs;
};