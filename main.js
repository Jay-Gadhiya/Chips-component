const deleteChip = document.querySelectorAll('.icon-cross');

deleteChip.forEach((ele) => {
    ele.addEventListener('click', () => {
        let parantEle = ele.parentElement;
        let grandParent = parantEle.parentElement;
        grandParent.classList.add('delete-chip');
    })
})