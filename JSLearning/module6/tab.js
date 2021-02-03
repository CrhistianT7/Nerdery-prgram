const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels =Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event){
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });

    tabButtons.forEach(tab => {
        // tab.areaSelected = false;
        tab.setAttribute('aria-selected',false);
    })

    event.currentTarget.setAttribute('aria-selected', true);

    const { id } = event.currentTarget;  
    const tabPanel = tabPanels.find(panel => {
        return panel.getAttribute('aria-labelledby') === id;
    });  

    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click',handleTabClick));
