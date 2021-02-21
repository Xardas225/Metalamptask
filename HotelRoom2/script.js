
const ratingItemList = document.querySelectorAll('.rating__item').forEach
const ratingItemArray = Array.prototype.slice.call(ratingItemList)

document.querySelectorAll('.rating__item').forEach(item => 
    item.addEventListener('click', () => 
        item.parentNode.dataset.totalValue = item.dataset.itemValue
    )    
)