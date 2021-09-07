import React from "react";
// import PropTypes from "prop-types";
import Post from './Post';

const newsfeedPosts = [
  {
    // profilePic: <img src="https://media-exp1.licdn.com/dms/image/C5603AQHHI1oo0E6Sag/profile-displayphoto-shrink_200_200/0/1616938431792?e=1636588800&v=beta&t=RbSgpNN16n_3r-CTP6eqWyEF3_6BDUxPU5wPJcj7Zi8" width="50px" height="50px" alt="Ben"></img>,
    profileName: "Godfrey Owidi",
    description: "I just want to get paid for this, is that too much to ask?"
  },
  {
    // profilePic: <img src="https://media-exp1.licdn.com/dms/image/C4E16AQFNhtHOVowu6A/profile-displaybackgroundimage-shrink_350_1400/0/1627079958989?e=1636588800&v=beta&t=Mpyv2sdXOmuTectGtWYs3UlswnJHMT7mW_vbGk-uW4s" width="50px" height="50px" alt="Godfrey"></img>,
    profileName: "Ben Pawlik",
    description: "I hate Mondays :'("
  },
  {
    // profilePic: <img src="https://scontent.fhio2-2.fna.fbcdn.net/v/t1.6435-9/49948010_10217904540391179_6563236672882868224_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=qDfG5Rk3tnoAX_vnAOk&_nc_oc=AQmjpnGhI9X4oTXaIBxeizr2dZMQ-Whj7XL1KDiwcGMjHSviwYaKSfAz27dkGozE6cI&tn=IW8fHMorv35z3W7u&_nc_ht=scontent.fhio2-2.fna&oh=bf30bbd0c2f35456da2813915065db19&oe=615B57FB"width="50px" height="50px" alt="Erika"></img>,
    profileName: "Erika Debelis",
    description: "i love iced lattes and sleep."
  }
]

function Newsfeed() {
  return (
    <React.Fragment>
      <hr/>
      {newsfeedPosts.map((post, index) =>
        <Post 
          // profilePic = {ProfilePic.profilePic}
          profileName= {post.profileName}
          description = {post.description}
          key = {index}/>
      )}
    </React.Fragment>
  );
}

export default Newsfeed;