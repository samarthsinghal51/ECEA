import React, { useState } from "react";
import Member from "../subcomponents/Member";
import "../css/menu.css";

const Team = () => {
  const [Profs] = useState([
    [
      "19n3S-XZ6Iq5VmuWQaPgbpp16St8mUA0l",
      "Dr Prakash Kodali",
      "Faculty Advisor",
      "154182",
    ],
    ["1y_EkYAcX1wWNHfmzRhiV-5nRLQi8SIQg", "Dr Gopi Ram", "Treasurer", "154175"],
  ]);
  const [GenSec] = useState([
    [
      "1M3MtsN2CvKBwWK-Q-2lxvk4UHi6yAzE4",
      "Manthan Tolia",
      "Poster Designer and Content Writer",
      "I am a software enthusiast with a love for game and web development. I have been in ECEA since my first year and have helped a lot to make ECEA what it is today. I love managing and organising events which keeps me busy and away from boredom.",
      "manny5252",
      "manny5252",
      "manthan-tolia-8b8587194",
      "manny525",
    ],
  ]);
  const [AddSec] = useState([
    [
      "1WDDE_JfJHWcLPL7g3Jlm0tP25qxN0xDS",
      "Samarth Singhal",
      "Website Designer and Event Coordinator",
      "CODE SLEEP EAT REPEAT.I love doing competitive programming and building full stack web apps.ECEA helped me in cultivating my comunication and technical skills. I will always remember being in it.",
      "samarth.singhal.9674",
      "its._.samarth_",
      "samarthsinghal5104",
      "samarthsinghal51",
    ],
    [
      "1hPvKr0EUYG2V6jtF3pUw71mpDqlgjBeZ",
      "Vishav kapahi",
      "Advertisement and problem setter in codequest",
      "Goal of my life - peace & sleep",
      "vishav.kapahi",
      "vishavkapahi",
      "vishav-kapahi-5574b51b5",
      null,
    ],

    [
      "1HjjGWZrCjuUdyLJzVRfB-BwHbmjVG6iX",
      "Mukul Verma",
      "Workshop lead",
      "Quick learner , self taught ",
      "mukul.verma.31149",
      "muk00l.307",
      "mukul-verma-49047a189",
      "toni249",
    ],
    [
      "12thqTYblQK3lUwuOPCN8Ag6Y5BsTltdu",
      "Mohit Tripathi",
      "Event Coordinator",
      '"Start Living Before You Start Dying " - Portgas D. Ace',
      "mohit.tripathi.399",
      "mohit.tripathi1102",
      null,
      null,
    ],
    [
      "1gY3flOdh_-la_s2qJrYh25nobbpVxcug",
      "Saurabh Kumar",
      "Poster Designer",
      "Careers are 20th century invention and I'm not sure if I want one, Loving 7 & living 92:48 y nada mas.",
      "profile.php?id=100008344064326",
      "saurapeutic",
      null,
      null,
    ],
  ]);
  const [JointSec] = useState([
    [
      "1EpNCSr-E2nddvXQvSDZbSVYh95ZMN-Gh",
      "Rushikesh Shendare",
      "Event Manager and Coordinator",
      "I'm a hardware enthusiast with a keen interest in Integrated Electronics, VLSI design and Web Technologies. I enjoy team work and am passionate about event management. Playing chess, badminton and video games are some of my other avocations",
      "rushikesh.shendare",
      "rushii_10",
      "rushikesh-shendare-461875134",
      "Rushikesh1008",
    ],
    [
      "10WJCwpJMuMPujlhxqYFbPaVTmckPEdM7",
      "Pratik Solav",
      "Event Organizer and Coordinator",
      "I am a tech enthusiast with interests in various fields such as VLSI ,Embedded Systems ,Web Development and a lot more",
      "pratik.solav",
      null,
      "pratik-solav-57b6b41aa",
      "pratiksolav",
    ],
    [
      "1moTs9OJQ-XqDpj8g_3zqxVb0J5INRr1a",
      "Tanvi Shekhar",
      "Event Coordinator and Content Writing Lead",
      "I am an electronics enthusiast and have versatile interests ranging from management to design and development. I am also an avid reader, writer and have a knack for all things creative",
      "profile.php?id=100008901305202",
      "tanvi_shekhar",
      "tanvi-shekhar",
      "TanviShekhar",
    ],
    [
      "16TX6NTZUQ_cDgwa_spSWQ30CJ_5C29xM",
      "S.V.S.Sudheep Rao",
      "Social media and Advertisement",
      "Here to help and learn,been part of association from 2018",
      "sudheep.dippu",
      "the_lone_contender",
      "sudheep-somisetti-1764531b2",
      "sudheep2",
    ],
    [
      "1XnAI0uBt0vsKoPGFtRaDdeuZXpRXj6sg",
      "Aniket SIngh",
      "Photography",
      "I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards. I’m not comfortable with settling, and I’m always looking for an opportunity to do better and achieve greatness",
      "aniket.singh.1293575",
      "a.n.i.k.e.t__20",
      "aniket-singh-4244b21a6",
      "Aniket182000",
    ],
    [
      "1LDqaakkKqFIoHJyCYePMaUeuJWQRYYI8",
      "Sakethkumar Amaragani",
      "Event management",
      "I am Sakethkumar  Amaragani ,3rd year ECE ,NITW.I am tech freak who loves to read about new technologies coming up in fast moving world.   My interests are programming , IOT and digital system design",
      "saketh.amaragani.5",
      null,
      null,
      null,
    ],
    [
      "1623vaQgEyemrR9etvHxVLn8rh4yvKJq_",
      "Sitanshu Shukla",
      "Event Conduction, Logistics and Operation",
      "A programming enthusiast who loves solving problems in the most optimum way possible. Plays Table Tennis as hobby",
      "sitanshu.shukla.988",
      "sitanshushukla.29",
      "sitanshu-shukla-a827a5181",
      "sitanshu29",
    ],

    [
      "1P9vKnlO54SeEYqXai0_5krV-KA3lJKPu",
      "Biral Kumar Pradhan",
      "Graphics Designer",
      "Avid Reader, Explorer, Wonderer",
      "biral.pradhan",
      "biralpradhan",
      "biral-pradhan-73b139176",
      "biral-pradhan",
    ],

    [
      "1mkosdr-d-S-NyhAbEz4kfJedeaei4JTF",
      "Ritika Paliwal",
      "Content Lead and Event Manager",
      "Always excited about techy-geeky stuff and forever open to conversations!",
      "ritika.paliwal.334",
      "paliwal_ritika",
      "ritika341",
      "riti341",
    ],
    [
      "1N6aomQ5Qq8fqo8G2lNcx4qfNEk6XVi44",
      "Lakshmi Pragna Kalavacharla",
      "Writer and Speaker ",
      "I love watching series, reading and writing for pastime. Technically, I find interest in IOT and Avionics. Looking to expand my horizons and learn as much as I can. ",
      "k.lakshmipragna",
      "lux_3700",
      "lakshmi-pragna-kalavacharla-574b661a3",
      null,
    ],
    [
      "1ciDQsg5GFzggO0LJvSBd6Nd0P7kPqKCn",
      "Prateek Saxena",
      "Designer",
      null,
      "prateeks99",
      null,
      "prateeks99",
      "prateeks99",
    ],
  ]);
  const [Exec] = useState([
    [
      "15DFVwcul315X9Cgs2sl4SFauUGnpuxoo",
      "Venugoud amaragani",
      "Technical writer, advertisement, video editing",
      "Interested in exploring new things , coding when I'm bored, memer(when free), interested in technology",
      "venugoud.amaragani",
      "aven_u_25",
      "venugoud-amaragani-1b318719a ",
      "venugoudamaragani",
    ],
    [
      "1H-2rTYsKKW3BbA-Oa0_i_0NpLd087coh",
      "Abitha Rao",
      "Content Curator",
      "Driven by curiosity, passion and an appreciation for clear logic that simplifies the approach to any problem, I hope to combine my technical know-how and creativity to make an impact. Climate conscious and an ardent supporter of the adopt-don’t-shop movement.",
      null,
      "raoabitha",
      "abitha-rao-5293401a7",
      null,
    ],
    [
      "1ThvMxI69TSys6XtkwK84EchlLKD5tYPl",
      "Kaiwalya Mutyalwar",
      "Content",
      "Electronics enthisiast, Curious, Adventurous, Supportive.",
      "kaiwalya.mutyalwar",
      "kaiwalyamutyalwar",
      "kaiwalya-mutyalwar-780877198",
      "Ksm2551",
    ],
    [
      "1ohUWLInT5Rrv0bzqvdXIliTYwKgXMOOz",
      "Neharika",
      "Content writer",
      "When it comes to carrying out a task,I'm result oriented and well timed. In my free time, I enjoy watching films and TV shows",
      "neharika.rao.775",
      "_neharika_rao",
      "neharika-rao-b4993a1b7",
      null,
    ],
    [
      "1uzEhsnb-OS0u2ybSezSIBcnG5xg0H551",
      "Sourabh Singh",
      "Poster Designer",
      "Leaner and enthusiast, simple and positive, like technology and business strartups",
      "profile.php?id=100007430561654",
      "sourabhsingishere",
      "sourabh-singh-ab5b101b6",
      "sourabhsingh2000",
    ],
    [
      "1y2jkY-89aYJQAa3HBrdKnM0hlRel3lpp",
      "Surya Prakash Surepally",
      "Poster Designer",
      "Sophomore in ECE. Interested in exploring cool tech. Love reading books and playing Chess.",
      "surepallysuryaprakash",
      "suryaprakash_surepally",
      "surya-prakash-surepally-4abb6a1a3",
      "suryaprakashsurepally",
    ],
    [
      "1i0Qmc7fcYiAQixJXc2ZhMQM2LE9HZ4OR",
      "Ankit Kumar",
      "Content Writer",
      "I work as content writer at ECEA. Apart being average in academics ,I am also good at Painting. My hobbies are reading novels and photography.  I love playing football.",
      "profile.php?id=100003171851532",
      "kumarank008",
      "ankitkumar008",
      "kumarankit008",
    ],
    [
      "1GX_aANk5w9gfgVTSr1i9maFODfcM5sSF",
      "Varun Srivatsav",
      "Content writer ",
      "Interested in working with team and always captivated by science and technology.",
      "varun.kondapally",
      "varun_srivatsav_",
      "varun-srivatsav-634b111b6",
      null,
    ],
    [
      "1mstsq_7oVNlq79qsMH4rP9RjiMuxf5hw",
      "Satvik Yandapalli",
      "Content Writer ",
      "Enthusiast with wild ambitions and big dreams!!",
      "satvik.yandapalli.77",
      "satvik_yandapalli_09",
      "satvik-yandapalli-55b9831a7",
      null,
    ],
    [
      "1HG_x8B8ci_8nLOKTRtAreWgCN1JmUtle",
      "Chava Pavan Kumar",
      "Instagram team",
      "I like reading books and always keen to learn something new",
      "chava.pavan.12",
      "chava.pavankumar",
      null,
      null,
    ],

    [
      "1cuNfd4-FGu91V9I-3JQDUJllOHb3P6dk",
      "Amit Kumar Yadav",
      "Poster Designer",
      "I am honest and  passionate about my work.I am ambitious about my aim. I am highly organized and workaholic.",
      "profile.php?id=100039253056950",
      "amit19.27",
      "amit-kumar-yadav-464b641b2",
      null,
    ],
    [
      "1OYTGlA3bNjNVmFPIfxT3oY7ZOgEHzV_M",
      "Vummaneni Rishitha",
      "Content Writer",
      "I'm a second year ECE student at NITW who likes to keep up with the changing technological world and put out content that makes people curious. ",
      null,
      "rishitha._.v",
      "rishitha-vummaneni-6642551ba",
      null,
    ],
    [
      "1-sFGxiUnKSS-t4TcmV7XVwc_Fvh3T4IN",
      "Alay Patel",
      "Content Creator",
      "I enjoy reading about and following the latest technological advances around the globe and I also like playing badminton and table tennis a lot. ",
      "alay.patel.543908",
      "alay2001",
      null,
      null,
    ],
  ]);
  const Faculty = Profs.map((prof) => {
    return (
      <Member
        key={prof[0]}
        photo={prof[0]}
        name={prof[1]}
        role={prof[2]}
        faculty={prof[3]}
      />
    );
  });
  const General = GenSec.map((sec) => {
    return (
      <Member
        key={sec[0]}
        photo={sec[0]}
        name={sec[1]}
        role={sec[2]}
        description={sec[3]}
        facebook={sec[4]}
        instagram={sec[5]}
        linkedin={sec[6]}
        github={sec[7]}
      />
    );
  });

  const Additional = AddSec.map((sec) => {
    return (
      <Member
        key={sec[0]}
        photo={sec[0]}
        name={sec[1]}
        role={sec[2]}
        description={sec[3]}
        facebook={sec[4]}
        instagram={sec[5]}
        linkedin={sec[6]}
        github={sec[7]}
      />
    );
  });
  const Joint = JointSec.map((sec) => {
    return (
      <Member
        key={sec[0]}
        photo={sec[0]}
        name={sec[1]}
        role={sec[2]}
        description={sec[3]}
        facebook={sec[4]}
        instagram={sec[5]}
        linkedin={sec[6]}
        github={sec[7]}
      />
    );
  });
  const Executive = Exec.map((sec) => {
    return (
      <Member
        key={sec[0]}
        photo={sec[0]}
        name={sec[1]}
        role={sec[2]}
        description={sec[3]}
        facebook={sec[4]}
        instagram={sec[5]}
        linkedin={sec[6]}
        github={sec[7]}
      />
    );
  });
  return (
    <div className="mainpageStyle">
      <h2 className="ui center aligned icon header">
        <i className="circular users icon"></i>
        Team
      </h2>
      <div>
        <h2 className="ui center aligned icon header">
          <i className="user icon"></i>
          <div className="content">Faculty</div>
        </h2>
        <div className="ui link cards">{Faculty}</div>
      </div>
      <br />

      <div>
        <h2 className="ui center aligned icon header">
          <i className="user icon"></i>
          <div className="content">General Secretary</div>
        </h2>

        <div className="ui link cards">{General}</div>
      </div>
      <br />

      <div>
        <h2 className="ui center aligned icon header">
          <i className="user icon"></i>
          <div className="content">Aditional Secretary</div>
        </h2>
        <div className="ui link cards">{Additional}</div>
      </div>
      <br />

      <div>
        <h2 className="ui center aligned icon header">
          <i className="user icon"></i>
          <div className="content">Joint Secretary</div>
        </h2>

        <div className="ui link cards">{Joint}</div>
      </div>
      <br />
      <div>
        <h2 className="ui center aligned icon header">
          <i className="user icon"></i>
          <div className="content"> Executive Member</div>
        </h2>

        <div className="ui link cards">{Executive}</div>
      </div>
      <br />
    </div>
  );
};
export default Team;
