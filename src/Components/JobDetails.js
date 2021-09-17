import { useParams } from "react-router";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  // console.log(id);
  //   const {
  //     data: blog,
  //     error,
  //     isPending,
  //   } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default JobDetails;
