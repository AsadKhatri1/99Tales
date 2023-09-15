let form = document.querySelector('form')

let main=document.querySelector('#main')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    
     let name=e.target.name.value
     let email=e.target.email.value
     let category=e.target.category.value
     let title=e.target.title.value
     let blog=e.target.blog.value

    
    let userDetails = JSON.parse(localStorage.getItem('details')) ?? []
    userDetails.push(
        {
name,
email,
category,
title,
blog
        }
    )

    localStorage.setItem('details', JSON.stringify(userDetails))
    display()
    e.target.reset()
})


let display=()=>{
    let userDetails = JSON.parse(localStorage.getItem('details')) ?? []
    console.log(userDetails)
    let finalData=""
    userDetails.forEach((x,i)=>{
        
        finalData+=`  
       
        <div class="items">
        <span class="cross" onclick="del(${i})">&times;</span>
        
        
        <h3>${x.name}</h3>
        
        <h6>${x.email}</h6>
        
        <p>${x.category}</p>

        <h3>Title:
        </h3>
        <p>${x.title}</p>
        <h3>Blog:
        </h3>
        <p>${x.blog}</p>

        <button class="btns" onclick="edit(${i})">Edit</button>
        </div>

        `
    })
    main.innerHTML=finalData

}
display()

function del(index){
    let userDetails = JSON.parse(localStorage.getItem('details')) ?? []
    userDetails.splice(index,1)
    localStorage.setItem('details',JSON.stringify(userDetails))
    display()
}

let edit=(index)=>{
    let userDetails = JSON.parse(localStorage.getItem('details')) ?? []
    let update=prompt('Enter editted value here')
    userDetails[index].blog=update
    console.log(userDetails[index].blog)
    localStorage.setItem('details',JSON.stringify(userDetails))
    display()
}