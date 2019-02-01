const tariffs = document.querySelectorAll('.tariff__wrapper');
const wrapper = document.querySelector('.wrapper');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');

const hidePopup = () => {
    wrapper.classList.add('hidden');
    popup.classList.add('hidden');
}
const showPopup = () => {
    wrapper.classList.remove('hidden');
    popup.classList.remove('hidden');
    wrapper.addEventListener('click', hidePopup);
    popupClose.addEventListener('click', hidePopup);
};

const removeChild = () => {
    const child = popup.querySelector('.tariff__wrapper');
    if (popup.contains(child)) {
        child.remove();
    }
}

tariffs.forEach(tariff => {
    tariff.addEventListener('click', () => {
        removeChild();
        const selectedTariff = tariff.cloneNode(true);
        popup.insertBefore(selectedTariff ,popup.querySelector('.button'));
        showPopup();
    });
});