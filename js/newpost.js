const postTitle = document.querySelector('#post-title');
const paragraphOne = document.querySelector('.paragraph1');
const paragraphTwo = document.querySelector('.paragraph2');
const paragraphThree = document.querySelector('.paragraph3');
const postImage = document.querySelector('#post-image').files[0];
const postAuthor = document.querySelector('#author');
const postCategory = document.querySelector('#category');
const postDate = document.querySelector('#post-date');
const submitPost = document.querySelector('#post-submit');

//upload image

function uploadImage(){
    //get image
    const postCover = document.querySelector('#cover-image').files[0];
    const imageName = postCover.name;
    var storageRef = firebase.storage().ref('images/'+Date.now()+imageName);
    //upload image to selected starage
    const uploadTask = storageRef.put(postCover);
    //get upload progress
    uploadTask.on('state_changed', function(snapshot){
        //get progress
        const progress = snapshot.bytestransferred/snapshot.totalBytes *100;
        console.log("Upload is " +progress+ " done");
    }, function(error){
        //handle errors
        console.log(error.message);
    }, function(){
        //handle successful upload
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            db.collection('inkuru').add({
                cover: downloadURL,
                author: postAuthor.value,
                title: postTitle.value,
                paragraphOne: paragraphOne.value,
                paragraphTwo: paragraphTwo.value,
                paragraphThree: paragraphThree.value,
                category: postCategory.value,
                Date: postDate.value
            }).then(function(){
                alert('Inkuru igiyeho neza');
                window.location.href = "../ubugenzuzi/inkuru wanditse.html";
            })
            
            
        });
    });
    
};

submitPost.addEventListener('click', (e)=>{
    e.preventDefault();
    uploadImage();
})
