import $ from "jquery";

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events() {
        // clicking the opne modal button
        this.openModalButton.click(this.opneModal.bind(this));
        //clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        // pushes any key
        $(document).keyup(this.keyPresHandler.bind(this));
    }

    keyPresHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }

    }

    opneModal() {
        this.modal.addClass("modal--is-visible");
        // prevent scrolling up
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }

}

export default Modal;