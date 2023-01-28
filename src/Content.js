import { useEffect, useState } from "react";

// const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
// function Content() {
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts");
//   const [showButtonTop, setShowButtonTop] = useState("");
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((posts) => {
//         // console.log(posts);
//         setPosts(posts);
//       });
//   }, [type]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 200) setShowButtonTop(true);
//       else setShowButtonTop(false);
//       console.log(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//      return () => {
//       console.log("clean");
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Hế lô Phát</h1>
//       <ul>
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             style={
//               tab === type ? { backgroundColor: "blue", color: "white" } : {}
//             }
//             onClick={() => setType(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//         {posts.map((post) => (
//           <li key={post.id}>{post.title || post.name}</li>
//         ))}
//         {showButtonTop && (
//           <button style={{ position: "fixed", right: 20, bottom: 20 }}>
//             Go to top
//           </button>
//         )}
//       </ul>
//     </div>
//   );
// }

// ********************************************
// comment

const lessons = [
  {
    name: "React",
    id: 1,
  },
  {
    name: "SPA,MPA",
    id: 2,
  },
  {
    name: "Arrow function",
    id: 3,
  },
];

function Content() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? "red" : "black",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
