const postTitle = document.querySelector('#post-title');
const paragraphOne = document.querySelector('.paragraph1');
const paragraphTwo = document.querySelector('.paragraph2');
const paragraphThree = document.querySelector('.paragraph3');
const postImage = document.querySelector('#post-image').files[0];
const postAuthor = document.querySelector('#author');
const postCategory = document.querySelector('#category');
const postDate = document.querySelector('#post-date');
const postCover = document.querySelector('#cover-image').value;
const submitPost = document.querySelector('#post-submit');

//upload image
const uploadImage = function(){
    const imageName = postCover.name;
    const storageRef = firebase.storage().ref('images/'+imageName);
    const uploadTask = storageRef.put(postCover);
    uploadTask.on('state_changed', function(snapshot){
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log('Upload is running');
            break;
        }
      }, function(error) {
          console.log(error);
      }, function() {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            db.collection('inkuru').add({
                cover: downloadURL,
                author: postAuthor.value,
                title: postTitle.value,
                content: {
                    paragraphOne: paragraphOne.value,
                    paragraphTwo: paragraphTwo.value,
                    paragraphThree: paragraphThree.value
                },
                category: postCategory.value,
                Date: postDate.value
            }).then(function(){
                alert('Inkuru yagiyeho neza!');
                window.location.href = "../ubugenzuzi/inkuru wanditse.html";
            })
        });
      });
    

}


submitPost.addEventListener('click', (e)=>{
    e.preventDefault();
    uploadImage();
})
