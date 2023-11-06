'use strict';

const View = {
    todoContainer: null,

    renderItem(data) {
        const template = this.createTemplate(data);
        this.todoContainer.prepend(template);
        Controller.form.reset();
    },

    createTemplate({title, description, id}) {
        const template = document.createElement('div');
        template.className = 'col-4';
        template.setAttribute('data-id', id);

        template.innerHTML = `
                        <div class="taskWrapper">
                            <div class="taskHeading">${title} <sup>${id}</sup></div>
                            <div class="taskDescription">
                                <p>${description}</p>
                            </div>
                            <button class="btn btn-danger delete-button btn-sm" data-id="${id}">
                                <i class="bi bi-trash"></i>
                                <span>Remove</span>
                            </button>
                        </div>`;

        return template;
    },


    setContainer(domEl) {
        if(!(domEl instanceof HTMLElement)) throw new Error('Block not valid HTML element');
        this.todoContainer = domEl;
    },


    init(createTemplateFunc) {
        if(typeof createTemplateFunc !== 'function') return;
        this.createTemplate = createTemplateFunc;
    }
}