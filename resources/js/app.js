import './bootstrap';
import '~resources/scss/app.scss';
import * as bootstrap from 'bootstrap';
import.meta.glob([
    '../img/**'
])

const deleteButtons = document.querySelectorAll('btn-delete');

deleteButtons.forEach((button) => {
    button.addEventListener('click', function () {
        let project_id = button.getAttribute('data-id');
        let type = button.getAttribute('data-type');
        let url = `${window.location.origin}/admin/${type}/${project_id}`;
        let form_delete = document.getElementById('form_delete');
        form_delete.setAttribute('action' , url);
    })


})
