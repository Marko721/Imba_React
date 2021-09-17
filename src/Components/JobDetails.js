import { useParams } from "react-router";
import Data from "../Components/Data";

const JobDetails = () => {
  const { id } = useParams();
  const Job = Data.jobs[id - 1];
  console.log(Job);
  //   console.log(Job[id - 1]);
  // console.log(id);
  //   const {
  //     data: blog,
  //     error,
  //     isPending,
  //   } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div>
      <div>{Job.Facility}</div>
    </div>
  );
};

export default JobDetails;
