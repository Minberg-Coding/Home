export default class Modal {
    constructor(HTML, options={span:true}) {
        this.parent = document.getElementById('modal');
        this.HTMLid = document.createElement('div'); 
        this.HTMLid.classList.add('modal-content');
        this.content = document.createElement('div');
        this.content.classList.add('modal-inner-content');
        this.content.innerHTML += HTML;
        
        if (options.span) {
            this.span = document.createElement('span');
            this.HTMLid.appendChild(this.span);
            this.span.innerHTML = '&times;';
            this.span.classList.add('close');
            this.span.addEventListener('click', e => {
                this.close();
            });
        }
        
        document.addEventListener('click', e => {
            if (e.target == modal)
                this.close();
        });
        
        this.parent.appendChild(this.HTMLid);
        this.HTMLid.appendChild(this.content);

        this.HTMLid.style.height = options.height;
        this.HTMLid.style.backgroundColor = options.color;
        this.HTMLid.style.color = options.textColor;
    }

    open() {
        if (this.HTMLid.style.display == 'block') return;
        this.isOpen = true;
        this.HTMLid.style.display = 'block';
        this.parent.style.display = 'block';
    }

    close() {
        if (this.HTMLid.style.display == 'none') return;
        this.HTMLid.style.display = 'none';
        this.parent.style.display = 'none';
    }

    addElement(elementType, elementId, parent) {
        const newElement = document.createElement(elementType);
        newElement.id = elementId;
        parent.appendChild(newElement);
    }

    addHTML(html) {
        if (typeof html != String) return;
        this.content.innerHTML += html;
    }


}