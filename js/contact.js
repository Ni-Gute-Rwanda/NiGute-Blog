function getQuery(){
    let name = document.querySelector('.sender');
    let email = document.querySelector('.senderEmail');
    let message = document.querySelector('.senderMessage');
    let form = document.querySelector('.form-contact');


    let btn = document.querySelector('.btn-ohereza');

    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        db.collection('ubutumwa').add({
            izina: name.value,
            email: email.value,
            message: message.value
        }).then(function(){
            alert('Ubutumwa bwanyu bwakiriwe neza, murakoze!');
            form.reset();
        }).catch(function(err){
            alert('Habaye ikibazo mu kohereza ubutumwa, mwongere mugerageze.');
        })
    })
}

getQuery();