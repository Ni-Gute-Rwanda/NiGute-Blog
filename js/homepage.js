// Article collection on homepage
function renderArticles(doc){
    let postCollection = document.querySelector('.kiny-post');
    let postDiv = document.createElement('div');
    postDiv.setAttribute('class', 'post-index');
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
    postDesc.textContent = doc.data().paragraphOne;
    readMore.innerHTML = 'Soma byose';
    share.innerHTML = doc.data().category;

    postDetail.appendChild(postTitle);
    postDetail.appendChild(postDesc);
    postDetail.appendChild(postAction);
    postAction.appendChild(readMore);
    postAction.appendChild(share);
    postDiv.appendChild(postCover);
    postDiv.appendChild(postDetail);


    postCollection.appendChild(postDiv);


}

db.collection('inkuru').where('category','==','Sobanukirwa').get().then((snapshot)=> {
    snapshot.docs.forEach((doc)=> {
        renderArticles(doc)
    })
})

// main Article on homepage
function mainPost(doc){
    let mainCover = document.querySelector('.maincover');
    let mainTitle = document.querySelector('#mainTitle');
    let mainDesc = document.querySelector('#mainDesc');

    mainCover.src = doc.cover;
    mainTitle.textContent = doc.title;
    mainDesc.textContent = doc.paragraphOne;     
}

db.collection('inkuru').get().then((snapshot)=> {
    snapshot.docs.forEach((doc)=> {
        mainPost(doc.data())
    })
})

// Article collection on homepage
function renderEng(doc){
    let postCollection = document.querySelector('.eng-post');
    let postDiv = document.createElement('div');
    postDiv.setAttribute('class', 'post-index');
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
    postDesc.textContent = doc.data().paragraphOne;
    readMore.innerHTML = 'Read more';
    share.innerHTML = doc.data().category;

    postDetail.appendChild(postTitle);
    postDetail.appendChild(postDesc);
    postDetail.appendChild(postAction);
    postAction.appendChild(readMore);
    postAction.appendChild(share);
    postDiv.appendChild(postCover);
    postDiv.appendChild(postDetail);


    postCollection.appendChild(postDiv);


}

db.collection('inkuru').where('category', '==', 'English').get().then((snapshot)=> {
    snapshot.docs.forEach((doc)=> {
        renderEng(doc)
    })
})

function amafoto(doc){
    let imgCol = document.querySelector('.imglat');
    let img = document.createElement('img');

    img.src = doc.cover;

    imgCol.appendChild(img);
}


db.collection('inkuru').get().then((snapshot)=> {
    snapshot.docs.forEach((doc)=> {
        amafoto(doc.data())
    })
})

