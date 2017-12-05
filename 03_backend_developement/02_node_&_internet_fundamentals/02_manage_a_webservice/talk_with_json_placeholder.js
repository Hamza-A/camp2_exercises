const request = require("request");

function myFunction(result){
  console.log(result);
}

function fetchPosts(callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );

}

function fetchPostByUser(userId, callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );
}

function fetchPost(Id, callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${Id}`,
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );
}

function fetchUsers(callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/users",
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );
}

function fetchUser(userId, callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/users/${userId}`,
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );
}

function fetchComments(callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/comments",
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );
}

function fetchCommentsByPost(postId, callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      method: "GET"
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );
}

function publishPost(userId, title, body, callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId.toString()
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },

    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );

}

function publishComment(postId, name, email, body, callback){
  request(
    {
      url: "http://jsonplaceholder.typicode.com/comments",
      method: "POST",
      body: JSON.stringify({
        postId: postId.toString(),
        name: name,
        email: email,
        body: body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },

    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );
}

function updatePostTitle(postId, newTitle, callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: "PUT",
      body: JSON.stringify({
        title: newTitle,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },

    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );
}

function updatePostBody(postId, newBody, callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: "PUT",
      body: JSON.stringify({
        body: newBody,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },

    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );
}

function updatePost(postId, newTitle, newBody, callback){
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: "PUT",
      body: JSON.stringify({
        title: newTitle,
        body: newBody,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },

    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response); // Print the response object
      // console.log("result:", result); // Print the HTML for the Google homepage.
      callback(result);
    }
  );
}




module.exports= {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost: publishPost,
  publishComment: publishComment,
  updatePostTitle: updatePostTitle,
  updatePostBody: updatePostBody,
  updatePost: updatePost
};
