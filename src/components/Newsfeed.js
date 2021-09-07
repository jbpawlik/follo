import React from "react";
import PropTypes from "prop-types";
import Post from './Post';

const newsfeedPosts = [
  {
    profilePic: <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1325084023245434880%2Fg0ERV37c_400x400.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fgodfreyowidi&tbnid=_qdXmLT4PtoiHM&vet=12ahUKEwiQ3oDBtu3yAhWuHDQIHffVA3MQMygAegQIARAR..i&docid=tCxVdPzTIwc_jM&w=400&h=400&itg=1&q=godfrey%20owidi&ved=2ahUKEwiQ3oDBtu3yAhWuHDQIHffVA3MQMygAegQIARAR" width="200px" ></img>,
    profileName: "Godfrey owidi",
    description: "I just want to get paid for this, is that too much to ask?"
  },
  {
    profilePic: <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4E03AQEPpLniXNnMow%2Fprofile-displayphoto-shrink_200_200%2F0%2F1623355864537%3Fe%3D1634774400%26v%3Dbeta%26t%3DHFacWMF1M-RYVQ5FCktYrL56db7Mmyxshv4CkOfXRa8&imgrefurl=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjbpawlik&tbnid=Seha1ooZ2CFABM&vet=12ahUKEwiI2Iz5tu3yAhVfLDQIHSydAVYQMygCegQIARAl..i&docid=tP_odZgiozFmmM&w=200&h=200&itg=1&q=ben%20pawlik&ved=2ahUKEwiI2Iz5tu3yAhVfLDQIHSydAVYQMygCegQIARAl" width="200px"></img>,
    profileName: "Ben Pawlik",
    description: "I hate Mondays :'("
  },
  {
    profilePic: <img src="link"></img>
    profileName: "Erika Debelis",
    description: ""
  }
]

function Newsfeed() {
  return {
    <React.Fragment>
    <hr/>
    {newsfeedPosts.map((post, index) =>
      <Post picture = {post.profilePic}
        name = {post.profileName}
        description = {post.description}
        key={index}/>
      )}
    </React.Fragment>
  }
}