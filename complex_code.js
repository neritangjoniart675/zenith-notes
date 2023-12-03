/* complex_code.js */

// This code demonstrates a complex implementation of a social media feed
// It includes features like user authentication, post creation, post deletion, post liking, and comment creation

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.posts = [];
    this.likedPosts = [];
  }

  createPost(content) {
    const post = new Post(content, this.username);
    this.posts.push(post);
  }

  deletePost(postId) {
    const postIndex = this.posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
      this.posts.splice(postIndex, 1);
    }
  }

  likePost(postId) {
    const post = this.getPostById(postId);
    if (post) {
      post.likes++;
      this.likedPosts.push(postId);
    }
  }

  unlikePost(postId) {
    const post = this.getPostById(postId);
    if (post) {
      post.likes--;
      const postIndex = this.likedPosts.indexOf(postId);
      if (postIndex !== -1) {
        this.likedPosts.splice(postIndex, 1);
      }
    }
  }

  commentOnPost(postId, content) {
    const post = this.getPostById(postId);
    if (post) {
      const comment = new Comment(content, this.username);
      post.comments.push(comment);
    }
  }

  getPostById(postId) {
    for (const post of this.posts) {
      if (post.id === postId) {
        return post;
      }
    }
    return null;
  }
}

class Post {
  constructor(content, username) {
    this.id = generateUniqueId();
    this.content = content;
    this.username = username;
    this.likes = 0;
    this.comments = [];
  }
}

class Comment {
  constructor(content, username) {
    this.content = content;
    this.username = username;
  }
}

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Example usage:

const user1 = new User("johnDoe", "pass123");
const user2 = new User("janeSmith", "qwerty");

user1.createPost("Hello, world!");
user2.createPost("Nice weather today!");

user1.likePost(user2.posts[0].id);
user2.commentOnPost(user1.posts[0].id, "Great post!");

console.log(user1);
console.log(user2);