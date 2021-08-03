if !@liked_posts.empty?
    json.likedPosts @liked_posts
else
    json.likedPosts []
end

json.followedUsers @followed_users_id

if !@posts.empty?
    json.posts do
        @posts.each do |post|
            json.partial! "api/posts/post", post: post
        end
    end
else
    json.posts []
end