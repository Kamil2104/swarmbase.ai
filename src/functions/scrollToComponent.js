export function scrollToComponent(componentId) {
    let component = document.getElementById(componentId);
    const offset = -30;

    if (component) {
        const desiredPosition = component.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: desiredPosition, behavior: 'smooth' });
    }
}