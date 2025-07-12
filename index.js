document.querySelectorAll('.a').forEach(k=>{
    k.addEventListener('click', (p)=>{
        let value=p.target.dataset.value || p.target.innerText
        console.log(value)
    })
})

