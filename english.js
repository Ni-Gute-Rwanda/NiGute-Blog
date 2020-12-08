// sobanukirwa Articles
function sobanukirwaArticles(doc){
    let postCollection = document.querySelector('.en-post-wrapper');
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


    let noPost = document.querySelector('.noPost');

    if(postDiv==0){
        noPost.textContent = "No stories to show";
    }

}

db.collection('inkuru').where('category','==', 'English').get().then((snapshot)=> {
    snapshot.docs.forEach((doc)=> {
        sobanukirwaArticles(doc)
    })
});