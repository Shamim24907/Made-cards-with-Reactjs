
import Card from "./components/Card";


const App = () => {

const jobsData = [
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Seattle, USA",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    company: "Google",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$140/hr",
    location: "Mountain View, USA",
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/42/1/meta-new-facebook-2021-logo-png_seeklogo-423961.png",
    company: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    company: "Netflix",
    datePosted: "3 weeks ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Los Angeles, USA",
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    company: "Apple",
    datePosted: "1 month ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$130/hr",
    location: "Cupelation, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8u8BZcgcIxcfgSJsas_HDf2pfYTBlmo2q3g&s",
    company: "Microsoft",
    datePosted: "2 months ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$145/hr",
    location: "Redmond, USA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    company: "Tesla",
    datePosted: "4 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "Austin, USA",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/05/Color-NVIDIA-Logo.jpg",
    company: "Nvidia",
    datePosted: "10 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Expert Level",
    pay: "$180/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "San Jose, USA",
  },
  {
    brandLogo: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
    company: "Spotify",
    datePosted: "3 weeks ago",
    post: "UX Researcher",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Stockholm, Sweden",
  },
];

console.log(jobsData);

  return (
    <div className="parent">
      {jobsData.map((job)=> {
        return <Card job={job} />
      }) }
    </div> 
  );
};

export default App;