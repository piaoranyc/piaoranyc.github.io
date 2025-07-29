var posts=["2025/07/29/hello-world/","2025/07/29/hello-world2 - 副本/","2025/07/29/hello-world2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };