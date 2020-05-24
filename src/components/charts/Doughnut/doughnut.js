export class DoughnutDataset {
    // data: DoughnutData[]

    /**
     * 
     * @param {DoughnutData[]} data 
     */
    constructor(data) {
        this.data = data;
    }

    /**
     * @returns {String[]} all labels in dataset
     */
    get labels() {
        let label_list = []
        this.data.forEach(part => {
            label_list.push(part.label)
        });

        return label_list
    }

    /**
     * @returns {Number[]} all values in dataset
     */
    get values() {
        let value_list = []
        this.data.forEach(part => {
            value_list.push(part.value)
        });

        return value_list
    }

    /**
     * @returns {String[]} all BG colours in dataset
     */
    get colors(){
        let color_list = []
        this.data.forEach(part => {
            color_list.push
        })
    }

    get datasets() {

    }
}

class DoughnutData {
    
    /**
     * 1 record in Doughnut Dataset
     * @param {Number} value 
     * @param {String} label 
     * @param {String} color 
     */
    constructor(value, label, color) {
        this.value = value;
        this.label = label;
        this.color = color;
    }

    /**
     * @returns {String} label
     */
    get label() {
        return this.label;
    }

    /**
     * @returns {Number} value (int or float)
     */
    get value() {
        return this.value;
    }

    /**
     * @return {String} hex color
     */
    get color() {
        return this.color;
    }
}


// value: Number,
// label: String,
// color: String,

