let result = (function () {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}
Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = +likes;
            this.dislikes = +dislikes;
            this._comments = [];
        }

        addComment(comment) {
            this._comments.push(comment);
        }

        toString() {
            let output = super.toString() + `\nRating: ${this.likes - this.dislikes}`;

            if (this._comments.length > 0) {
                output += `\nComments:
 * ${this._comments.join('\n * ')}`
            }
            return output;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.veiews = +views;
        }
        view(){
            this.veiews++;
            return this;
        }

        toString() {
            return  super.toString() + `\nViews: ${this.veiews}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost}
})();

let Post = result.Post;
let SocialMediaPost = result.SocialMediaPost;
let BlogPost = result.BlogPost;

let p = new Post("Some Title", "Some Content");
console.log(p.toString());

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());

let bp = new BlogPost("Some Blog", "Blog Content", 31);
console.log(bp.toString());
bp.view();
bp.view();
bp.view();
console.log(bp.toString());