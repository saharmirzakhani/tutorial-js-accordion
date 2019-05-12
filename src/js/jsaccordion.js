function JSAccordion(elementOrSelector) {
    if(!(this instanceof JSAccordion))
        return new JSAccordion(elementOrSelector);

    //  define public methods
    this.init = function() {
        var item,ul;
        item = this.targetElement.querySelectorAll("li");
        ul = this.targetElement.querySelector("ul");


        ul.classList.replace("list","jsac-list");
        item.forEach(function (element) {
            if(element.classList.contains("list-item")) {
                element.classList.replace("list-item", "jsac-list-item");
            }
            var hd= element.querySelector("div.header");

            if(hd.classList.contains("header")) {
                hd.classList.replace("header", "jsac-header");
            }

        })
    };

    //  start construction operations
    //  if parameter is element selector
    if(typeof elementOrSelector == 'string') {
        this.targetElement = document.querySelector(elementOrSelector);
        if(this.targetElement == null) {
            throw ('invalid element selector');
        }
    }
    //  if parameter is element DOM object
    else if(typeof elementOrSelector == 'object')
        this.targetElement = elementOrSelector;
    else
        throw ('Unknown element type');

    //  set autoincrement instance id to object
    this.id = JSAccordion.instances.length;

    JSAccordion.instances.push(this);

    return this;
}

//  define static property to keep all instances
JSAccordion.instances = [];