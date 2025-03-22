const register=document.querySelector('#register')
const login=document.querySelector('#login')
const register1=document.querySelector('#register1')
const btnCriar=document.querySelector('.btnEntrar')

register.addEventListener('click',()=>{
        //faz o login subir para surgir o register
        login.classList.add('disappear')
        register1.classList.remove('fade')
})

btnCriar.addEventListener('click',()=>{
register1.classList.add('fade')      
login.classList.remove('disappear')

})