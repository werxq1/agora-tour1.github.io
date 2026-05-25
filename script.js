document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById('tourForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        
        const tourSelect = document.getElementById('tour-select');
        const tour = tourSelect.options[tourSelect.selectedIndex].text;
        

        alert(`Спасибо, ${name}! \n\nВаша заявка на экскурсию "${tour}" на дату: ${date} успешно принята. \nМы свяжемся с вами в ближайшее время.`);
        
        this.reset(); // Очистка формы
    });

});