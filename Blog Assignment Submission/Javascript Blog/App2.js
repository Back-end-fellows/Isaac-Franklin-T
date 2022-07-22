var postSkeleton = (function () {
  var post, newPost;
  return {
    getOriginal: function (data) {
      post =
        '<div class="blogpost"> <p>%postid%</p><h2>%header%</h2><p>%mainpost%</p></div>';

      (newPost = post.replace("%header%", data.header)),
        (newPost = newPost.replace("%postid%", data.id)),
        (newPost = newPost.replace("%mainpost%", data.mainPost));
      document
        .querySelector(".blogpostout")
        .insertAdjacentHTML("beforeend", newPost);
      Array.prototype.slice.call(newPost);
    },
    clearFields: function () {
      var fields;
      fields = document.querySelectorAll(
        ".postid" + "," + ".postheader" + "," + ".postmain"
      );
      fields.forEach(function (current) {
        current.value = "";
      });

      fields[0].focus();
    },
  };
})();

var getPost = (function () {
  return {
    savePost: function () {
      return {
        id: document.querySelector(".postid").value,
        header: document.querySelector(".postheader").value,
        mainPost: document.querySelector(".postmain").value,
      };
    },
  };
})();

document.addEventListener("keypress", Activate);

function activatebtn() {
  var getPostProper;
  getPostProper = getPost.savePost();
  console.log(getPostProper);
  postSkeleton.getOriginal(getPostProper);
  postSkeleton.clearFields();
}

function Activate(event) {
  if (event.keyCode === 13 || event.which === 13) {
    var getPostProper;
    getPostProper = getPost.savePost();
    console.log(getPostProper);
    postSkeleton.getOriginal(getPostProper);
    postSkeleton.clearFields();
  }
}
