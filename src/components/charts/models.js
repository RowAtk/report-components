class DoughnutDataset {
    // data: DoughnutData[]

    /**
     * 
     * @param {DoughnutData} data 
     */
    constructor(data) {
        this.data = data;
    }

    get labels() {
        let label_list = []
        this.data.forEach(part => {
            label_list.push(part.label)
        });

        return label_list
    }
}

class DoughnutData {
    
    constructor(value, label, color) {
        this.value = value;
        this.label = label;
        this.color = color;
    }

    get label() {
        return this.label;
    }
}

{
    // value: Number,
    // label: String,
    // color: String,
}
