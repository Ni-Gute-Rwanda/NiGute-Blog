
function renderArticles(doc){
    let postCollection = document.querySelector('.post-wrapper');
    let postDiv = document.createElement('div');
    postDiv.setAttribute('class', 'post');
    postDiv.setAttribute('data_id',doc.id);
    let postCover = document.createElement('img');
    let postDetail = document.createElement('div');
    let postTitle = document.createElement('h1');
    let postDesc = document.createElement('p');
    let postAction = document.createElement('div');
    postAction.setAttribute('class', 'post-action');
    let readMore = document.createElement('button');
    let share = document.createElement('button');


    postCover.src = doc.data().cover;
    postTitle.textContent = doc.data().title;
    postDesc.textContent = doc.data().content;
    readMore.innerHTML = 'Soma byose';
    share.innerHTML = 'Sangiza';

    postDetail.appendChild(postTitle);
    postDetail.appendChild(postDesc);
    postDetail.appendChild(postAction);
    postAction.appendChild(readMore);
    postAction.appendChild(share);
    postDiv.appendChild(postCover);
    postDiv.appendChild(postDetail);


    postCollection.appendChild(postDiv);


}

db.collection('inkuru').get().then((snapshot)=> {
    snapshot.docs.forEach((doc)=> {
        renderArticles(doc)
    })
})

function mainPost(doc){
    let mainCover = document.querySelector('.maincover');
    let mainTitle = document.querySelector('#mainTitle');
    let mainDesc = document.querySelector('#mainDesc');

    mainCover.src = doc.cover;
    mainTitle.textContent = doc.title;
    mainDesc.textContent = doc.content.paragraphOne;     
}

db.collection('inkuru').get().then((snapshot)=> {
    snapshot.docs.forEach((doc)=> {
        mainPost(doc.data())
    })
})