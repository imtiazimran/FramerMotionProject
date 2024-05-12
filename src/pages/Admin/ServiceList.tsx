import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ServiceList = () => {
  const getData = async () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  };

  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getData,
  });

  console.log(data);

  if (isLoading) return "Loading...";

  return <div>This is from ServiceList</div>;
};

export default ServiceList;
