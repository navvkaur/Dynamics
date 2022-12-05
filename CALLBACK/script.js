

const posts=[
    {title:'post one' , body:'this is post one',createdAt: new Date().getTime()},
    {title:'post two' , body:'this is post two',createdAt: new Date().getTime()}
];



function getPosts()
{
    setTimeout(() =>{
        let output = ' ';
        posts.forEach((post, index)=>{
            output += `<li> ${post.title} UPDATED ON ${(new Date().getTime()-post.createdAt)/1000} </li>`;
        });
    
    document.body.innerHTML=output;
    },1000);
}

function createPost(post,callback)
{
    setTimeout(() =>{
        posts.push({...post,createdAt: new Date().getTime() });
        callback();

    },2000);
}
function create4thPost(post,callback)
{
    setTimeout(() =>{
        posts.push( {...post,createdAt: new Date().getTime() });
        callback();

    },3000);
}
createPost({title:'post three' , body:'this is post three',createdAt:new Date().getTime()},getPosts);
create4thPost({title:'post four' , body:'this is post four',createdAt:new Date().getTime()},getPosts);

