function JSAccordion(elementOrSelector) {
    if(!(this instanceof JSAccordion))
        return new JSAccordion(elementOrSelector);

    //  define public methods
    this.init = function() {
        var itemLi,body,itemUl;
        itemLi = this.targetElement.querySelectorAll("li");
        itemUl = this.targetElement.querySelector("ul");
        itemUl.classList.add("jsac-list");
        itemLi.forEach(function (element) {
            element.classList.add("jsac-list-item");
            var itemHead= element.firstElementChild;
            var itemBody= element.lastElementChild;
            //console.log(itemBody);
            itemHead.classList.add("jsac-header");
            itemBody.classList.add("jsac-body");
            itemHead.addEventListener("click",toggleAccordion);

            function toggleAccordion() {

                if(this.parentNode.classList.contains("expanded")){
                    this.parentNode.classList.replace("expanded","collapsed");
                }else {
                    this.parentNode.classList.replace("collapsed","expanded")
                }

            }
            /*     function getSiblings (elem) {
             var siblings = [];
             var sibling = elem.parentNode.firstElementChild;
             while(sibling){
             if (sibling.nodeType === 1 && sibling !== elem) {
             siblings.push(sibling);
             }
             sibling = sibling.nextSibling;
             }
             //return siblings;

             }*/

        });

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